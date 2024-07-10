import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./ExpenseTraker.css";

const ExpenseTracker = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [entry, setEntry] = useState([]);
  const [balance, setBalance] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const addToExpense = (type) => {
    if (amount && reason) {
      setEntry([
        ...entry,
        {
          amount: parseFloat(amount),
          reason: reason,
          type: type,
        },
      ]);
      setAmount("");
      setReason("");
    }
  };

  useEffect(() => {
    const calculateBalance = () => {
      let balance = 0;
      entry.forEach((item) => {
        if (item.type === "credit") {
          balance += item.amount;
        } else if (item.type === "debit") {
          balance -= item.amount;
        }
      });
      return balance;
    };

    setBalance(calculateBalance());

    const creditSum = entry
      .filter((item) => item.type === "credit")
      .reduce((sum, item) => sum + item.amount, 0);
    const debitSum = entry
      .filter((item) => item.type === "debit")
      .reduce((sum, item) => sum + item.amount, 0);

    const chartData = {
      labels: ["Credit", "Debit"],
      datasets: [
        {
          data: [creditSum, debitSum],
          backgroundColor: ["green", "red"],
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.data = chartData;
      chartInstance.current.update();
    } else {
      chartInstance.current = new Chart(chartRef.current, {
        type: "pie",
        data: chartData,
      });
    }
  }, [entry]);

  return (
    <div className="expense-tracker">
      <div>
        <div className="inputs">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter Amount"
          />
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            placeholder="Enter Reason"
          />
        </div>
        <div className="buttons">
          <button onClick={() => addToExpense("credit")}>
            Amount Credited
          </button>
          <button onClick={() => addToExpense("debit")}>Amount Debited</button>
        </div>
        <div className="entries">
          {entry.map((item, index) => (
            <div key={index} className={item.type}>
              <div>{item.amount}</div>
              <div>{item.reason}</div>
            </div>
          ))}
        </div>

        <div className="balance">
          <h3>Balance: {balance}</h3>
        </div>
      </div>
      <div className="chart">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ExpenseTracker;
