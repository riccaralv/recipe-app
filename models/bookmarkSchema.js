import { Schema, model } from 'mongoose';

const bookmarkSchema = new Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
		total: { type: Number, requerd: true },
		recipes: [{ type: Schema.Types.ObjectId, ref: 'recipes' }],
	},
	{ timestams: true }
);

const BookmarkedCollection = model('bookmarks', bookmarkSchema);

export default BookmarkedCollection;
