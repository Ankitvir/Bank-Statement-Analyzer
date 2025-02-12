import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

function CreditDebitChart({ transactions }) {
  console.log("📊 Transactions in Pie Chart:", transactions); // Debugging log

  if (!transactions || transactions.length === 0) {
    return <p style={{ textAlign: "center", color: "red" }}>⚠ No data available</p>;
  }

  const totalCredit = transactions.reduce((sum, tx) => sum + (tx.credit || 0), 0);
  const totalDebit = transactions.reduce((sum, tx) => sum + (tx.debit || 0), 0);

  const data = [
    { name: "Credit", value: totalCredit },
    { name: "Debit", value: totalDebit },
  ];

  console.log("✅ Pie Chart Data:", data); // Debugging log

  const COLORS = ["#4CAF50", "#FF5733"];

  return (
    <div className="chart-container fade-in">
      <h2>Credit vs. Debit</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CreditDebitChart;
