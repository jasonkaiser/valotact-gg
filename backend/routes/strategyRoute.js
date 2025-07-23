const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler');

const { getStrategies, 
        getStrategyById, 
        updateStrategy, 
        createStrategy, 
        deleteStrategy 
      } = require('../controllers/strategyController');


router.route("/").get(getStrategies);

router.route("/:id").get(validateToken, getStrategyById);

router.route("/:id").put(validateToken, updateStrategy);

router.route("/").post(validateToken, createStrategy);

router.route("/:id").delete(validateToken, deleteStrategy);

module.exports = router; 