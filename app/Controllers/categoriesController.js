const categories = (req, res) => {
    res.send("categoriess page");
}

const addCategory = (req, res) => {
    res.send("add category page");
}

const updateCategory = (req, res) => {
    res.send("update category page");
}

const deleteCategory = (req, res) => {
    res.send("update category page");
}

module.exports = {categories, addCategory, updateCategory, deleteCategory }