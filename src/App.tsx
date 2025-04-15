import React, { useState, useEffect } from "react";
import "./styles.css";

// Mocked data to simulate API
const employees = [
  { id: "", firstName: "", lastName: "" },
  { id: "1", firstName: "Alice", lastName: "Smith" },
  { id: "2", firstName: "Bob", lastName: "Jones" },
];

const transactions = [
  { id: "t1", employeeId: "1", amount: 100, description: "Lunch" },
  { id: "t2", employeeId: "2", amount: 200, description: "Travel" },
  { id: "t3", employeeId: "1", amount: 50, description: "Taxi" },
];

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  useEffect(() => {
    if (!selectedEmployee) {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter((tx) => tx.employeeId === selectedEmployee)
      );
    }
  }, [selectedEmployee]);

  return (
    <div className="App">
      <h1>Ramp Transactions</h1>

      <label>
        Filter by Employee:
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          {employees.map((e) => (
            <option key={e.id} value={e.id}>
              {e.id === "" ? "All Employees" : `${e.firstName} ${e.lastName}`}
            </option>
          ))}
        </select>
      </label>

      <ul>
        {filteredTransactions.map((tx) => (
          <li key={tx.id}>
            <strong>${tx.amount}</strong> — {tx.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
