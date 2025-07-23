const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler');

const { getUsers, 
        getUserById, 
        getUserStats, 
        getUserStrategies, 
        updateUser
      } = require ('../controllers/userController');


router.route("/").get(validateToken, getUsers);

router.route("/:id").get(validateToken, getUserById);

router.route("/strategies/:id").get(getUserStrategies);

router.route("/:id").put(validateToken, updateUser);

router.route("/stats/:id").get(getUserStats);



module.exports = router; 