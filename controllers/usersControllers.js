import bcrypt from 'bcrypt'; // npm i bcrypt
import jwt from 'jsonwebtoken'; // npm i jsonwebtoken
import UserCollection from '../models/userSchema.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserCollection.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserCollection.findById(id);
    if (user) {
      res.json({ success: true, data: user });
    } else {
      res.json({ success: false, message: 'Please provide a valid id' });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const user = new UserCollection(req.body);

    // STORING IMAGE IN DB
    if (req.files) {
      const image = new ImageCollection({
        filename: new Date().getTime() + '_' + req.files.image.name,
        data: req.files.image.data,
        userId: user._id,
      });
      await image.save();
      user.profileImage = `http://localhost:3000/images/${image.filename}`;
    }

    // HASHING PASSWORD
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;

    // STORING USER IN DB
    await user.save();
    res.json({ success: true, data: user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const modifyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserCollection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserCollection.findByIdAndRemove(id);
    res.json({ success: true, data: deletedUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// AUTHENTICATION
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserCollection.findOne({ email });
    if (user) {
      const verifyPassword = bcrypt.compareSync(password, user.password);
      if (verifyPassword) {
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.SIGNATURE,
          { expiresIn: '1h', issuer: 'Lili', audience: 'e-store-user' }
        );
        res.header('token', token).json({ success: true, data: user });
      } else {
        res.json({ success: false, message: "The password doesn't match" });
      }
    } else {
      res.json({
        success: false,
        message: "The email doesn't exist in our database",
      });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
