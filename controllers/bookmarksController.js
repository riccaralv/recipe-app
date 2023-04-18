import BookmarkedCollection from "../models/bookmarkSchema.js"
import RecipeCollection from '../models/recipeSchema.js';


export const getAllBookmarks = async (req, res) => {
    try{
        const bookmarks = await BookmarkedCollection.find()
        .populate("userId, "lastName email")
        .populate("recipes", "Name url");
        res.json({succes:true, data: recipes});
    }catch(err){
        res.json({succes:false, message: err.message});
    }
};

export const addNewBookmark = async (req, res, next) =>{
    try{
        const recipe = new BookmarkedCollection(req.body);
        await recipe.save()
        res.json({ success:true, data: recipe })
    }catch(err){
        res.json({ success:false, message: err.message});
    };
}

export const getSingleBookmark = async (req, res) => {
    try{
        const { id } = req.params;
        const recipe = await BookmarkedCollection.findById(id);
        
    }
}   catch(err){}