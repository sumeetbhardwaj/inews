const express =require("express");
const route = express.Router();
const { usersController, adminController,frontController } = require("../app/Controllers");

route.get('/deshboard', adminController.home );
route.get('/register', usersController.register);
route.post('/register', usersController.register);
route.get('/login', usersController.login);
route.post('/login', usersController.login);

route.get('/about', frontController.about);


module.exports = route