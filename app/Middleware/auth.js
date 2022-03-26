const jwt = require("jsonwebtoken");
const { User } = require("../Models");


const auth = async (req, res, next) => {
   try{
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({_id:verifyUser._id});
    req.token = token;
    req.user = user;
    next();
   } catch (error) {
    res.redirect("/login");
   }
}
const admin =  (req, res, next) => {
        if(req.user.role != 1) {
            res.redirect("/");
        }
    next();
}

module.exports = { auth, admin };