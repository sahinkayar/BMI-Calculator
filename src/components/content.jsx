import React, { useState } from "react";
import Results from "./Results";

function Content() {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Bmı, setBmı] = useState("");
  const handleClick = () => {
    const calc = (Weight / (Height / 100) ** 2).toFixed(1);
    setBmı(calc);
    console.log(calc);
  };
  const handleDelete = () => {
    setWeight("");
    setHeight("");
    setBmı("");
    console.log(Bmı);
  };
  return (
    <div className="content">
      <label>Weight(kg)</label>
      <input
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={Weight}
      />{" "}
      <label>Height(cm)</label>
      <input
        type="number"
        onChange={(e) => setHeight(e.target.value)}
        value={Height}
      />
      <div className="btns">
        <button onClick={() => handleClick()}>Results</button>
        <button onClick={() => handleDelete()} className="Delete">
          Delete Result
        </button>
      </div>
      <div>
        <Results Bmı={Bmı} />
      </div>
    </div>
  );
}

export default Content;
