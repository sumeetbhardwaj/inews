const home = (req, res) => {
    res.send("Home page");
}

const about = (req, res) => {
    res.render('about', {"title": "iNews - About"});
}

const page404 = (req, res) => {
    res.render('page404', {"title": "iNews - 404 Page "});
}

module.exports = { home, about, page404 }