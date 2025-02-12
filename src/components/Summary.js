import React, { useMemo } from 'react';

const Summary = ({ transactions }) => {
  console.log("Transactions in Summary:", transactions); 

  const { totalCredit, totalDebit, currentBalance } = useMemo(() => {
    if (!transactions || transactions.length === 0) {
      return { totalCredit: 0, totalDebit: 0, currentBalance: 0 };
    }

    return {
      totalCredit: transactions.reduce((sum, tx) => sum + (tx.credit || 0), 0),
      totalDebit: transactions.reduce((sum, tx) => sum + (tx.debit || 0), 0),
      currentBalance: transactions[transactions.length - 1]?.balance || 0
    };
  }, [transactions]);

  if (!transactions || transactions.length === 0) {
    return <p style={{ textAlign: "center", color: "red" }}>⚠ No data available for summary</p>;
  }

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Credit: <strong>${totalCredit.toFixed(2)}</strong></p>
      <p>Total Debit: <strong>${totalDebit.toFixed(2)}</strong></p>
      <p>Current Balance: <strong>${currentBalance.toFixed(2)}</strong></p>
    </div>
  );
};

export default Summary;
