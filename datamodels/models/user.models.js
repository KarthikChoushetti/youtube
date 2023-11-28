import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      uinque: true,
      lowercase: true,
    },
    email: {
      type: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: true,
      required: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);
