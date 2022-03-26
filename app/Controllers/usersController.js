const {User} = require("../Models");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
    try {
        if(req.method == 'POST') {
        const { fname, email, password } = req.body;
        const checkEmail = await User.findOne({email});
        const newUser = new User({
            fname,
            email,
            password
        });
            if(!checkEmail) {
                const  token = await newUser.generateAuthToken();
                res.cookie("jwt", token, { expires : new Date(Date.now() + 1000 * 60 * 60 * 24 )});
                const result = await newUser.save();
                res.json({"successMessage":"You Have Successfully Subscibeed"});
            } else {
                res.json({"errorMessage":"Email Already exist"});
            }  
        } else {
            if(!req.cookies.jwt){
                res.render("register", {"title": "Register"});
            }else{
                res.redirect("/");
            }            
        }
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        if(req.method == 'POST') {
            const { email, password } = req.body;
            const userEmail = await User.findOne({email});
            if(! userEmail || typeof userEmail == "null") {
                res.json({"errorMessage" : "Email & Password are worng!"});
            } else {
                const isMatch  = await bcrypt.compare(password, userEmail.password);
                if(isMatch){
                    const  token = await userEmail.generateAuthToken();
                    res.cookie("jwt", token, { expires : new Date(Date.now() + 1000 * 60 * 60 * 24 )});
                    res.status("200").json({"successMessage":"User Logined"});
                } else {
                    res.json({"errorMessage":"Email & Password are worng!"});                
                }
            }
        } else {
            if(!req.cookies.jwt){
                res.render("login", {"title": "Login"});
            }else{
                res.redirect("/");
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const logout = async (req, res) => { 
    try {
        req.user.tokens =  req.user.tokens.filter((currElement) => {
            return currElement.token !== req.token;
        })
        res.clearCookie("jwt");
        await req.user.save();
        res.redirect("/login");
    } catch (error) {
        console.log(error)
    }
}
module.exports = { register, login, logout }