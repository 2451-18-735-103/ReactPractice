//without using useMemo
import React, { useState } from 'react';

// Function to count even numbers
const countEvenNumbers = (numbers) => {
  console.log('Counting even numbers...');
  return numbers.filter((num) => num % 2 === 0).length;
};

const ExampleMemo = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [toggle, setToggle] = useState(false);

  // This function runs every time the component re-renders
  const evenCount = countEvenNumbers(numbers);

  return (
    <div>
      <h1>Without useMemo</h1>
      <p>Even Numbers: {evenCount}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>Toggle state: {toggle.toString()}</p>
    </div>
  );
};

export default ExampleMemo;
