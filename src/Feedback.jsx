import React, { useState } from "react";

function Feedback() {
  const [good, setGood] = useState(0);
  const [poor, setPoor] = useState(0);
  const [amazing, setAmazing] = useState(0);
  const total = good + poor + amazing;
  const average = total / 3;

  const goodIncrease = () => {
    setGood(good + 1);
  };
  const poorIncrease = () => {
    setPoor(poor + 1);
  };
  const amazingIncrease = () => {
    setAmazing(amazing + 1);
  };
  return (
    <>
      <div>
        <button onClick={() => goodIncrease()}>Good</button>
        <button onClick={() => poorIncrease()}>Poor</button>
        <button onClick={() => amazingIncrease()}>Amazing</button>
        <h1>Good {good} </h1>
        <h1>Poor {poor} </h1>
        <h1>Amazing {amazing} </h1>
        <h1>Total :- {total}</h1>
        <h1>Average:- {average}</h1>
      </div>
    </>
  );
}
export default Feedback;
