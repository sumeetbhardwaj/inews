const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    APP_PORT,
    SECRET_KEY, 
    DB_HOST
} = process.env;

