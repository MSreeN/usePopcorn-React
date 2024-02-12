import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import reportWebVitals from "./reportWebVitals";

export default function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating onRating={setRating} maxRating={10} />
      <p>This movie was rated {rating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating="10" /> */}
    <StarRating
      maxRating="5"
      defaultRating={3}
      // color="yellow"
      message={["worst", "okay", "good", "super", "excellent"]}
    />
    <Test />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
