import express from 'express';
const router = express.Router();

import {
	addNewBookmark,
	deleteBookmark,
	getAllBookmarks,
	getAllUserBookmarks,
	getSingleBookmark,
	modifyBookmark,
} from '../controllers/bookmarksController.js';

router.get('/', getAllBookmarks);

router.post('/confirm', addNewBookmark); // check confirm ???

router.get('/userbookmarks/:id', getAllUserBookmarks);

router.get('/:id', getSingleBookmark);

router.patch('/:id', modifyBookmark);

router.delete('/:id', deleteBookmark);

export default router;
