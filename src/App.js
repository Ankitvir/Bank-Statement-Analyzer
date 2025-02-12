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
      console.log("Fetched Transactions in App.js:", data);
      setTransactions(data);
    };
    loadTransactions();
  }, []);


  const handleUploadedTransactions = (newData) => {
    console.log(" Received Uploaded Data:", newData); 

    if (!Array.isArray(newData)) {
        console.error(" Error: newData is not an array!", newData);
        return;
    }

  
    const validTransactions = newData.filter(tx => 
        tx.date && tx.description && (tx.credit !== undefined || tx.debit !== undefined) && tx.balance !== undefined
    );

    console.log(" Filtered Transactions for Dashboard:", validTransactions); 

    setTransactions((prev) => [...prev, ...validTransactions]); 
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
