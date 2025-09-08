import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Other");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category
    };

    addExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Other");
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-wrap gap-3"
>
  <input
    type="text"
    placeholder="Expense Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="border p-2 rounded flex-1"
  />
  <input
    type="number"
    placeholder="Amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="border p-2 rounded w-32"
  />
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="border p-2 rounded"
  />


  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border p-2 rounded"
  >
    <option value="Food">Food</option>
    <option value="Travel">Travel</option>
    <option value="Bills">Bills</option>
    <option value="Shopping">Shopping</option>
    <option value="Other">Other</option>
  </select>

  
  <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition ml-6" > 
    Add </button>
</form>
  );
}

export default ExpenseForm;