import mongoose from 'mongoose';
const todoschema = new mongoose.Schema(
  {
    content: {
      type: string,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
      },
    ], // Array of sub Todos
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoschema);
