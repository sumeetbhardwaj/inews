const mongoose = require("mongoose");
mongoose.connect(DB_HOST,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log("connection okay")})
.catch((error) => { console.log(error)})