import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function Chart({ transactions }) {
  console.log(" Transactions in Chart:", transactions); // Debugging log

  if (!transactions || transactions.length === 0) {
    return <p style={{ textAlign: "center", color: "red" }}>⚠ No data available for chart</p>;
  }

  return (
    <div className="chart-container">
      <h2>Balance Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={transactions}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="balance" stroke="#4CAF50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
