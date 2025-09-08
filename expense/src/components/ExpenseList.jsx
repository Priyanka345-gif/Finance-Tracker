import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2> Expense History</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((exp) => (
            <li key={exp.id}>
              <strong>{exp.title}</strong> - rupees{exp.amount} ({exp.category}) on {exp.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
