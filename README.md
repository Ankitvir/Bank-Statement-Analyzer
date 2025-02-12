# Bank Statement Analyzer

## Project Overview
The **Bank Statement Analyzer** is a **React-based dashboard** that allows users to **upload bank transaction files (CSV)** and analyze their financial data through **tables, summaries, and interactive charts**.

## Features
 **Upload CSV files** containing bank transactions  
 **View transactions in a dynamic table**  
 **Generate financial summaries (total credit, debit, balance)**  
 **Visualize trends with charts (balance over time, spending breakdown)**  
 **User-friendly and responsive design**

---

## Project Setup Instructions

### 1️ **Clone the Repository**
```bash
git clone https://github.com/your-repo/bank-statement-analyzer.git
cd bank-statement-analyzer
```

### 2️ **Install Dependencies**
```bash
npm install
```

### 3️ **Start the Application**
```bash
npm start
```

This will start the application at `http://localhost:3000/`.

### 4️ **Build for Production**
```bash
npm run build
```

This generates the production-ready files in the `build/` directory.

---

## Design Decisions & Trade-offs

### ** Why React?**
- **Component-based architecture** for better code reuse & modularity.
- **State management using React Hooks** ensures efficient updates.
- **React Router** for easy navigation between pages.

### ** Trade-offs & Considerations**
- **CSV vs. Database:** Since this project is frontend-only, transactions are stored in memory instead of a database. A backend can be added for persistence.
- **File Upload Format:** Currently supports only CSV. XLSX support can be added in future versions.
- **Styling Approach:** Used **CSS with Flexbox & Grid** instead of a UI framework (like Bootstrap) for better customization.

---

## Assumptions & Extra Features
### ** Assumptions:**
- The CSV file follows a format with **Date, Description, Credit, Debit, and Balance** columns.
- The user will manually upload new transactions; auto-fetching from a bank API is not implemented.
- Transactions are stored temporarily in state (not saved persistently).

### ** Extra Features Implemented:**
 **Interactive Charts:** Time series, pie, and bar charts for financial insights.
 **Summary Section:** Displays total credit, debit, and current balance.
 **Fully Responsive UI:** Works on desktops, tablets, and mobiles.
 **Error Handling:** Alerts for invalid file formats and empty data.

---

## Future Enhancements
 **Add filtering & sorting for transactions**  
 **Export transactions as CSV/PDF**  
 **Integrate with a backend API for persistent storage**  
 **Enhance UI with animations & themes**  

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

