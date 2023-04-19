import express from 'express';
import {
	createNewUser,
	deleteUser,
	getAllUsers,
	getSingleUser,
	loginUser,
	modifyUser,
} from '../controllers/usersControllers.js';

const router = express.Router();

// GET ALL USERS => "/users/"
router.get('/', /*auth, isAdmin,*/ getAllUsers);

// POST NEW USER => "/users/"
router.post('/', /*rules,*/ createNewUser);

// POST AUTHENTICATION USER => "/users/login"
router.post('/login', loginUser);

// VERIFYING TOKEN WITH REFRESH => "/users/refresh"
router.get(
	'/refresh',
	/*auth,*/ (req, res) => {
		res.json({ success: true, data: req.user });
	}
);

// GET SINGLE USER => "/users/xxxxx"
router.get('/:id', /*auth, isAdmin, */ getSingleUser);

// PATCH SINGLE USER => "/users/xxxxx"
router.patch('/:id', /*auth, isAdmin, */ modifyUser);

// DELETE SINGLE USER => "/users/xxxxx"
router.delete('/:id', /*auth, isAdmin, */ deleteUser);

export default router;
