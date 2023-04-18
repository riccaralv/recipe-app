import BookmarkedCollection from "../models/bookmarkSchema.js"


export const getAllRecipes = async (req, res) => {
    try{
        const bookmarks = await BookmarkedCollection.find()
        .populate("userId, "lastName email")
        .populate("recipes", "title price");
        res.json({succes:true, data: recipes});
    }catch(err){
        res.json({succes:false, message: err.message});
    }
};

export const addNewRecipe = async (req, res, next) =>{
    try{
        const recipe = new BookmarkedCollection(req.body);
        await recipe.save()
        res.json({ success:true, data: recipe })
    }
    }catch(err){
        res.json({ success:false, message: err.message});
    }