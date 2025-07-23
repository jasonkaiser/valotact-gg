const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Strategy = require('../models/strategyModel');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();



const HENRIK_API_KEY = process.env.HENRIK_API_KEY;


//@desc Get All Users
//@route GET /api/users
//@access Public

const getUsers = asyncHandler( async (req, res) => {

    const users = await User.find();

    if(!users.length){
        res.status(404);
        throw new Error("No Users were found.");

    }

    res.status(200).json(users);

});


//@desc Get User by ID
//@route GET /api/users/:id
//@access Public

const getUserById = asyncHandler( async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400); 
        throw new Error("Invalid user ID format");
    }

    const user = await User.findById(req.params.id)

    if(!user){
        res.status(404);
        throw new Error("User not found");
    }
    
    res.status(200).json(user);

});


//@desc Get User Strategies
//@route GET /api/users/strategies/:id
//@access Public

const getUserStrategies = asyncHandler ( async (req, res) => {

    const userID = req.params.id; 
  
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid user ID format.");
    }

    const user = await User.findById(userID);
    
    if(!user){
        res.status(404);
        throw new Error("User is not found.");
    }

    const strategy = await Strategy.find({user: userID});

    if(!strategy.length){
        res.status(404);
        throw new Error("This user does not have any strategies.");     

    }

    res.status(200).json(strategy);

});

//@desc Update User
//@route PUT /api/users
//@access Public

const updateUser = asyncHandler( async (req, res) => {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid user ID format.");
    }

    const user = await User.findById(req.params.id);

    if(!user){    
        res.status(404);
        throw new Error("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(
                        req.params.id, 
                        req.body,
                        { new: true }
                    );
    res.status(200).json(updatedUser);

})


//@desc Get User Stats
//@route GET /api/users/stats/:id
//@access Public

const getUserStats = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  console.log("HenrikDev API key:", process.env.HENRIK_API_KEY);

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  let { region, gameName, tagLine } = user;

  if (!region || !gameName || !tagLine) {
    res.status(400);
    throw new Error("User's Valorant info incomplete");
  }

  region = encodeURIComponent(region.trim());
  gameName = encodeURIComponent(gameName.trim());
  tagLine = encodeURIComponent(tagLine.trim());

  try {
    const response = await axios.get(
      `https://api.henrikdev.xyz/valorant/v4/matches/${region}/pc/${gameName}/${tagLine}`,
      {
        headers: {
          Authorization: process.env.HENRIK_API_KEY, 
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching stats:", error.response?.data || error.message);

    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Failed to fetch Valorant stats";

    res.status(error.response?.status || 500).json({ error: message });
  }
});




module.exports = {
                    getUsers,
                    getUserById,
                    getUserStats,
                    getUserStrategies,
                    updateUser    
                 }