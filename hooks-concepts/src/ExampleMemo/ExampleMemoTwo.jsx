import React, { useState, useMemo,useEffect } from 'react';

// Function to count even numbers
const countEvenNumbers = (numbers) => {
  console.log('Counting even numbers...');
  return numbers.filter((num) => num % 2 === 0).length;
};

const ExampleMemoTwo = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [toggle, setToggle] = useState(false);
   const [evenCount,setEvenCount]=useState(0);
  // Memoize the result of counting even numbers only recompute when numbers change
   useEffect(() =>setEvenCount(countEvenNumbers(numbers), [numbers]));

  return (
    <div>
      <h1>With useMemo</h1>
      <p>Even Numbers: {evenCount}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>Toggle state: {toggle.toString()}</p>
    </div>
  );
};

export default ExampleMemoTwo;
