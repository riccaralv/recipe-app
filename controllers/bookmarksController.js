import BookmarkedCollection from '../models/bookmarkSchema.js';

export const getAllBookmarks = async (req, res) => {
	try {
		const bookmarks = await BookmarkedCollection.find()
			.populate('userId', 'firstName email')
			.populate('recipes', 'Name url'); // why name and url ???
		res.json({ success: true, data: bookmarks });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const addNewBookmark = async (req, res) => {
	try {
		const bookmark = new BookmarkedCollection(req.body);
		await bookmark.save();
		res.json({ success: true, data: bookmark });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const getSingleBookmark = async (req, res) => {
	try {
		const { id } = req.params;
		const bookmark = await BookmarkedCollection.findById(id);
		if (bookmark) {
			res.json({ success: true, data: bookmark });
		} else {
			res.json({ success: false, message: 'please provide valid id' });
		}
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const modifyBookmark = async (req, res) => {
	try {
		const { id } = req.params;
		const modifiedBookmark = await BookmarkedCollection.findByIdAndUpdate(
			id,
			req.body,
			{
				new: true,
			}
		);
		res.json({ success: true, data: modifiedBookmark });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const deleteBookmark = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedBookmarked = await BookmarkedCollection.findByIdAndRemove(
			id
		);
		res.json({ success: true, data: deletedBookmarked });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};

export const getAllUserBookmarks = async (req, res) => {
	try {
		const { id } = req.params;
		const userBookmarks = await BookmarkedCollection.find({
			userId: id,
		}).populate('recipes');
		res.json({ success: true, data: userBookmarks });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
};
