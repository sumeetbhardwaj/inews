const express =require("express");
const Router = express.Router();
const { usersController, adminController,frontController, postController, categoryController } = require("../app/Controllers");
const { auth, admin }  = require("../app/Middleware/auth")

Router.get('/', frontController.home);
// deshbord 
Router.get('/deshboard', auth, admin, adminController.deshboard );
// posts
Router.get("/admin/posts", auth, admin, postController.posts)
Router.get("/admin/add-post", auth, admin, postController.addPost)
// categories 
Router.get("/admin/categories", auth, admin, categoryController.categories)
Router.get("/admin/add-category", auth, admin, categoryController.addCategory)
Router.post("/admin/add-category", auth, admin, categoryController.addCategory)
Router.get("/admin/update-category/:_id", auth, admin, categoryController.updateCategory)
Router.post("/admin/update-category", auth, admin, categoryController.updateCategory)
Router.get("/admin/delete-category/:_id", auth, admin, categoryController.deleteCategory)

// register
Router.get('/register', usersController.register);
Router.post('/register', usersController.register);
// login
Router.get('/login', usersController.login);
Router.post('/login', usersController.login);
//logout
Router.get('/logout', auth, usersController.logout);
//users
Router.get("/users", auth, admin, usersController.users)
Router.get("/delete-user/:_id", auth, admin, usersController.deleteUser)

Router.get('/about', auth, frontController.about);

// 404 page
Router.get('/*',frontController.page404);


module.exports = Router