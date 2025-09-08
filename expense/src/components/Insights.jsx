import React from "react";

function Insights({ expenses }) {
  if (expenses.length === 0) return null;

  const total = expenses.reduce((acc, e) => acc + e.amount, 0);
  const food = expenses.filter((e) => e.category === "Food")
                       .reduce((acc, e) => acc + e.amount, 0);

  return (
    <div className="insights">
      <h2>Insights</h2>
      <p>Total Spent: ₹{total}</p>
      {food > total * 0.4 && <p>You spent more than 40% on Food!</p>}
      {total > 5000 && <p>High spending this month! Consider saving.</p>}
    </div>
  );
}

export default Insights;
