const {Category} = require("../Models");
const categories = async (req, res) => {
    const getAllCategories = await Category.find();
    res.render("admin/categories",{"title": "iNews - Categories", "allCategory": getAllCategories, "user": req.user});
}

const addCategory = async (req, res) => {
try {
    if(req.method == 'POST') {
        const name = req.body.name;
        const checkCategory = await Category.findOne({name});
        if(checkCategory){
            res.json({"errorMessage" : "Category Already Exist"});
        } else {
            const newCategory = new Category({
                name
            });
            await newCategory.save();
            res.json({"successMessage" : "You have added catrgotry successfully !"});
        }
    } else {
        res.render("admin/add-category",{"title": "iNews - Add Category", "user": req.user});
    }
} catch (error){
    console.log(error);
}
}

const updateCategory = async (req, res) => {
    try{
        if(req.method == 'POST') {
            const { _id, name } = req.body;
            const checkCat = await Category.findOne({name});
            if(checkCat){
                res.json({"errorMessage" : "Category Already Exist"});
            } else {
                await Category.findByIdAndUpdate(_id, {name}, { useFindAndModify: false})
                res.json({"successMessage" : "You have update catrgotry successfully !"});
            }
        } else {
            const _id = req.params._id;
            const getSingleCategory = await Category.findOne({_id});
                res.render("admin/update-category",{"title":"iNews - Update Category", "getSingleCategory":getSingleCategory, "user": req.user});
        }
    } catch(error){
       res.redirect('/404')
    }
}

const deleteCategory = async(req, res) => {
    try{
        const _id = req.params._id;
        await Category.findOneAndDelete({_id});
        res.redirect("/admin/categories");
    } catch(error){
        console.log(error)
    }
    
}

module.exports = {categories, addCategory, updateCategory, deleteCategory }