
const deshboard = (req, res) => {
    var user = req.user;
    if(user){
        user = req.user;
    } else {
        user = "";
    }
    res.render("admin/deshboard",{"title":"iNews - Deshboard", "user": user });
}

module.exports = { deshboard }