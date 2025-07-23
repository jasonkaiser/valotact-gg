const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { off } = require('../models/strategyModel');


//@desc Register User
//@route POST /api/auth/register
//@access Public

const registerUser = asyncHandler(async(req, res) => {

        const {username, password, email} = req.body;

        if(!username || !password || !email){    
            res.status(400);
            throw new Error("All fields are mandatory");
        }

        const userExists = await User.findOne({ email });

        if(userExists){
            res.status(400);
            throw new ("User is already registered with that email");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        if(user){

            console.log(`User account named: ${username} created.`)
            res.status(201).json({_id: user._id, email: user.email});
            } else {

            res.status(400);
            throw new Error("User data is not valid");

        }

});


const loginUser = asyncHandler(async(req, res) => {

        const { email, password } = req.body;

        if(!email || !password) {
            res.status(400);
            throw new Error("All fields are mandatory!")
        }

        const user = await User.findOne({ email });

        if(!user){

            res.status(400);
            throw new Error("This email is not registered!")

        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(400);
            throw new Error("Incorrect password!");
        } 

        const accessToken = jwt.sign({

            user: {

                username: user.username,
                email: user.email,
                id: user._id

            }


        }, process.env.ACCESS_TOKEN_SECRET,
           {expiresIn: "1m"} );
        
        console.log(`Welcome back ${user.username}`)
        res.status(200).json({ accessToken });

});


module.exports = {registerUser, loginUser};