
const home = (req, res) => {
    res.send("Home page");
}

const about = (req, res) => {
    res.render('about', {"title": "iNews - About", "user": req.user});
}

const page404 = (req, res) => {
    console.log(req.user)
    res.render('page404', {"title": "iNews - 404 Page", "user": req.user});
}

module.exports = { home, about, page404 }