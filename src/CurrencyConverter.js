import { useEffect } from "react";
import { useState } from "react";

export default function CurrencyConverter() {
  const [curr1, setCurr1] = useState("EUR");
  const [curr2, setCurr2] = useState("USD");
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("");

  // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

  useEffect(
    function () {
      async function fetchData() {
        console.log("use Effect executed");
        if (!amount) return;
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${curr1}&to=${curr2}`
        );
        const data = await response.json();
        if (!response.ok) return;
        console.log("response from api", data);
        setOutput(data.rates[curr2]);
        console.log(output);
      }
      fetchData();
    },
    [amount, curr1, curr2]
  );

  return (
    <div>
      <input
        value={amount}
        type="text"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={curr1} onChange={(e) => setCurr1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={curr2} onChange={(e) => setCurr2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p value={output}>{output}</p>
    </div>
  );
}
