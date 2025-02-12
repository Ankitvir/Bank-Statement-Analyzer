import { useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const reader = new FileReader();

    if (file.name.endsWith(".csv")) {
      // ✅ Process CSV file
      reader.onload = (event) => {
        const csvData = event.target.result;
        const rows = csvData.split("\n").slice(1); // Remove header row
        const parsedData = rows.map(row => {
          const [date, description, credit, debit, balance] = row.split(",");
          return {
            date: date?.trim(),
            description: description?.trim(),
            credit: parseFloat(credit?.trim()) || 0,
            debit: parseFloat(debit?.trim()) || 0,
            balance: parseFloat(balance?.trim()) || 0
          };
        }).filter(tx => tx.date && tx.description && !isNaN(tx.balance));

        console.log("✅ Parsed CSV Transactions:", parsedData);
        onUpload(parsedData);
        alert("CSV file uploaded successfully!");
        navigate("/"); // Redirect to Dashboard
      };
      reader.readAsText(file);
    } else if (file.name.endsWith(".xlsx")) {
      // ✅ Process Excel file
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: true });

        console.log("📊 Raw Excel Data:", jsonData);
        const parsedData = jsonData.map(row => ({
          date: row.Date,
          description: row.Description,
          credit: row.Credit || 0,
          debit: row.Debit || 0,
          balance: row.Balance || 0
        })).filter(tx => tx.date && tx.description && !isNaN(tx.balance));

        console.log("✅ Parsed Excel Transactions:", parsedData);
        onUpload(parsedData);
        alert("Excel file uploaded successfully!");
        navigate("/"); // Redirect to Dashboard
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Unsupported file type. Please upload a CSV or Excel file.");
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload a Bank Statement (CSV or Excel)</h2>
      <input type="file" accept=".csv, .xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
