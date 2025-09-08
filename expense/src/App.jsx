import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import ExpenseChart from "./components/ExpenseChart.jsx";
import Insights from "./components/Insights.jsx";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); 

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const resetExpenses = () => {
    setExpenses([]);
    localStorage.removeItem("expenses");
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  
  const filteredExpenses = expenses.filter(
    (exp) => new Date(exp.date).getMonth() === selectedMonth
  );

  const monthlyTotal = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="app p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Personal Finance Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      
      <div className="summary bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold text-green-600">
          Total Spent: ₹{total.toFixed(2)}
        </h2>

      
        <div className="mt-2">
          <label className="mr-2 font-semibold">Select Month:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="border rounded p-1"
          >
            {monthNames.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>

        
        <h3 className="text-md text-gray-700 mt-2">
          {monthNames[selectedMonth]} Spending: ₹{monthlyTotal.toFixed(2)}
        </h3>

      
        <button
          onClick={resetExpenses}
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>

    
      <ExpenseList expenses={filteredExpenses} />
      <ExpenseChart expenses={filteredExpenses} />
      <Insights expenses={filteredExpenses} />
    </div>
  );
}

export default App;
