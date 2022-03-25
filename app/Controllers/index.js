const adminController = { home } = require('./adminController')
const frontController = { about } = require("./frontController")
const usersController = { login } = require("./usersController")


module.exports = { usersController,adminController, frontController}