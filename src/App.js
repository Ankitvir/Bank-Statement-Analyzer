import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
import { fetchTransactions } from "./services/api";
import "../src/Style/index.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      console.log("Fetched Transactions in App.js:", data); // Debugging log
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  // ✅ Function to handle uploaded transactions
  const handleUploadedTransactions = (newData) => {
    console.log("📂 Received Uploaded Data:", newData); // Debugging log

    if (!Array.isArray(newData)) {
        console.error("❌ Error: newData is not an array!", newData);
        return;
    }

    // ✅ Filter out non-transaction objects
    const validTransactions = newData.filter(tx => 
        tx.date && tx.description && (tx.credit !== undefined || tx.debit !== undefined) && tx.balance !== undefined
    );

    console.log("✅ Filtered Transactions for Dashboard:", validTransactions); // Debugging log

    setTransactions((prev) => [...prev, ...validTransactions]); // Append only valid transactions
};

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Dashboard transactions={transactions} setTransactions={setTransactions} />} 
          />
          <Route 
            path="/upload" 
            element={<FileUpload onUpload={handleUploadedTransactions} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
