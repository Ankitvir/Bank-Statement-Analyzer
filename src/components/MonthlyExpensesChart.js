import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function MonthlyExpensesChart({ transactions }) {
  console.log(" Transactions in Bar Chart:", transactions);

  if (!transactions || transactions.length === 0) {
    return <p style={{ textAlign: "center", color: "red" }}> No data available</p>;
  }


  const expensesByMonth = transactions.reduce((acc, tx) => {
    if (!tx.date || !tx.debit) return acc;
    const month = tx.date.substring(0, 7); 
    acc[month] = (acc[month] || 0) + tx.debit;
    return acc;
  }, {});

  const data = Object.keys(expensesByMonth).map(month => ({
    month,
    expenses: expensesByMonth[month],
  }));

  console.log(" Bar Chart Data:", data);

  return (
    <div className="chart-container fade-in">
      <h2>Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="expenses" fill="#FF5733" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyExpensesChart;
