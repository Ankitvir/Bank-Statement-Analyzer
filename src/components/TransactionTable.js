function TransactionTable({ transactions }) {
  console.log("📋 Transactions in Table:", transactions); // Debugging log

  return (
    <div className="transaction-table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date || "N/A"}</td>
                <td>{tx.description || "N/A"}</td>
                <td>{tx.credit ? `$${tx.credit}` : "-"}</td>
                <td>{tx.debit ? `$${tx.debit}` : "-"}</td>
                <td>{tx.balance || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
                No transactions available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
