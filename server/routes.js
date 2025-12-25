import { Router } from "express";
import { healthCheck } from "#controllers/health.controller.js";

import expensemodel from "#models/schema.expense.js";

const router = Router();

router.get("/health", healthCheck);

router.get("/getExpenses", async (req, res) => {
  const expenses = await expensemodel.find({});
  res.status(200).json(expenses);
});

router.post("/addExpense", async (req, res) => {
  try {
    const expenses = await expensemodel.insertMany(req.body);
    res.status(201).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.put("/updateExpense/:id", async (req, res) => {
  const body = req?.body;
  const updatedExpense = await expensemodel.findOneAndUpdate({ id: req.params.id }, body, { new: true });

  res.status(200).json(updatedExpense);
});

router.delete("/deleteExpense/:id", async (req, res) => {
  console.log(req.params.id);
  const deletedExpense = await expensemodel.findOneAndDelete({ id: req.params.id });

  res.status(200).json(deletedExpense);
});

export default router;
