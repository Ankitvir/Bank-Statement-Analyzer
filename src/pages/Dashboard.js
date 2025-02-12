import TransactionTable from "../components/TransactionTable";
import Summary from "../components/Summary";
import Chart from "../components/Chart";
import CreditDebitChart from "../components/CreditDebitChart";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";

function Dashboard({ transactions }) {
  console.log("✅ Transactions in Dashboard:", transactions);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {transactions.length === 0 ? (
        <p style={{ color: "red" }}>⚠ No transactions found. Try uploading a file.</p>
      ) : (
        <>
          <Summary transactions={transactions} />
          <Chart transactions={transactions} />
          <CreditDebitChart transactions={transactions} />
          <MonthlyExpensesChart transactions={transactions} />
          <TransactionTable transactions={transactions} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
