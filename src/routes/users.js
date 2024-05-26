/*const express = require("express");
const userController = require("../controllers/user-controller");

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.post("/user", userController.createUser);
router.get("/users/:id", userController.getUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

router.get("/admins", userController.getAdmins);
router.get("/certifiers", userController.getCertifiers);
*/


/* Auth Routes*/
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

// Route for registering a new user
router.post('/register', userController.register);

// Route for logging in a user
router.post('/login', userController.login);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a specific user by ID and userType
router.get('/:id/:userType', userController.getUser);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update an existing user
router.put('/', userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

// Route to get all admins
router.get('/admins', userController.getAdmins);

// Route to get all certifiers
router.get('/certifiers', userController.getCertifiers);

// Route for user authentication
router.post('/authenticate', userController.authenticateUser);

module.exports = router;

