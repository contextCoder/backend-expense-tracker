import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true }
});

export default mongoose.model("expenses", expenseSchema);