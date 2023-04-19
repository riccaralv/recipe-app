import express from 'express';
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  loginUser,
  modifyUser,
} from '../controllers/usersControllers.js';
import { administrator } from '../middlewares/administrator.js';
import { authorized } from '../middlewares/authorized.js';
import { validationRules } from '../middlewares/validator.js';

const router = express.Router();

// GET ALL USERS => "/users/"
router.get('/', authorized, administrator, getAllUsers);

// POST NEW USER => "/users/"
router.post('/', validationRules, createNewUser);

// POST AUTHENTICATION USER => "/users/login"
router.post('/login', loginUser);

// VERIFYING TOKEN WITH REFRESH => "/users/refresh"
router.get('/refresh', authorized, (req, res) => {
  res.json({ success: true, data: req.user });
});

// GET SINGLE USER => "/users/xxxxx"
router.get('/:id', authorized, administrator, getSingleUser);

// PATCH SINGLE USER => "/users/xxxxx"
router.patch('/:id', authorized, administrator, modifyUser);

// DELETE SINGLE USER => "/users/xxxxx"
router.delete('/:id', authorized, administrator, deleteUser);

export default router;
