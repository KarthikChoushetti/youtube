import mongoose from 'mongoose';
const subtodoschema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestapms: true }
);
export const Subtodo = mongoose.model('Subtodo', subtodoschema);
