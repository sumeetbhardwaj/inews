
const home = (req, res) => {
    res.render("admin/home",{"title":"iNews - Home Page"});
}

module.exports = { home }