// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate emails
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // you can increase as per your policy
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
