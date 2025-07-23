const asyncHandler = require('express-async-handler');
const Strategy = require('../models/strategyModel');
const mongoose = require('mongoose');


//@desc Get All Strategies
//@route GET /api/strategies
//@access Public

const getStrategies = asyncHandler( async (req, res) => {

    const strategies = await Strategy.find();
    if(!strategies || strategies == 0){
        
        res.status(404);
        throw new Error("No Strategies were found.");

    }

    res.status(200).json(strategies);

});


//@desc Get Strategy by ID
//@route GET /api/strategies/:id
//@access Public


const getStrategyById = asyncHandler( async (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400); 
        throw new Error("Invalid strategy ID format");
    }

    const strategy = await Strategy.findById(req.params.id)
    if(!strategy){

        res.status(404);
        throw new Error("Strategy not found");
    }
    
    res.status(200).json(strategy);

});

//@desc Update Strategy
//@route PUT /api/strategies/:id
//@access Public

const updateStrategy = asyncHandler( async (req, res) => {
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid strategy ID format.");
    }

    const strategy = await Strategy.findById(req.params.id);
    if(!strategy){
        
        res.status(404);
        throw new Error("Strategy not found");
    }

    const updatedStrategy = await Strategy.findByIdAndUpdate(
                        req.params.id, 
                        req.body, 
                        {new: true}
                    );
    res.status(200).json(updatedStrategy);

});


//@desc Create Strategy
//@route POST /api/strategies
//@access Public 

const createStrategy = asyncHandler ( async (req, res) => {

        const { user, title, map, } = req.body;
        if(!user || !title || !map){

            res.status(400);
            throw new Error("User, Title and Map fields are mandatory")
        }

        if (typeof user !== 'string' || typeof title !== 'string' || typeof map !== 'string') {

            res.status(400);
            throw new Error("Invalid field types");
        }

        const strategy = await Strategy.create(req.body);
        res.status(201).json(strategy);

});


//@desc Delete Strategy
//@route DELETE /api/strategies
//@access Public 


const deleteStrategy = asyncHandler (async (req, res) => {

    const strategy = await Strategy.findByIdAndDelete(req.params.id);
    if(!strategy){

        res.status(404);
        throw new Error("Strategy not found");      
    }

    res.status(201).json({message: "Strategy deleted"});

});

module.exports = {
                   getStrategies, 
                   getStrategyById, 
                   updateStrategy, 
                   createStrategy, 
                   deleteStrategy 
                };