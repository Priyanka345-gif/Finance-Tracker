import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = ["Food", "Transport", "Entertainment", "Shopping", "Other"];
  const data = categories.map(
    (cat) => expenses.filter((e) => e.category === cat)
            .reduce((acc, e) => acc + e.amount, 0)
  );

  const chartData = { 
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9B59B6", "#2ECC71"],
      },
    ],
  };

  return (
    <div className="chart">
      <h2> Spending Breakdown</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default ExpenseChart;
