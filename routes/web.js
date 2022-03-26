const express =require("express");
const route = express.Router();
const { usersController, adminController,frontController } = require("../app/Controllers");
const { auth, admin }  = require("../app/Middleware/auth")

route.get('/', frontController.home);

route.get('/deshboard', auth, admin, adminController.deshboard );

route.get('/register', usersController.register);
route.post('/register', usersController.register);

route.get('/login', usersController.login);
route.post('/login', usersController.login);

route.get('/logout', auth, usersController.logout);

route.get('/about', auth, frontController.about);
route.get('/*',frontController.page404);


module.exports = route