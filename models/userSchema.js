import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: {
    type: String,
    default: 'user',
    // enum: ['user', 'admin'],
    enum: ['user'],
  },
  profileImage: {
    type: String,
    default: function () {
      return `https://robohash.org/${this.email}`;
    }, // Identiconizer!
  },
});

userSchema.indexes({ email: 1 });

const UserCollection = model('users', userSchema);

export default UserCollection;
