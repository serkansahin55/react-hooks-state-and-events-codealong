import React, {useState} from "react";
import { randomNumber } from "../utils";

function NumberList() {

  const [numbers, setNumbers] = useState([1, 2, 3])
  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...numbers, newNumber]
    setNumbers(newNumberArray)
  }

  const numberList = numbers.map((num) => {
    <li key={num}>{num}</li>
  })

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{/* list of numbers */}</ul>
    </div>
  );
}

export default NumberList;
