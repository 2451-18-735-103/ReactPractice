

import React, { useState, useCallback } from "react";
var funccount = new Set();
const ExampleTwo = () => {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(0);

	const incrementCounter = useCallback(() => {
		setCount(count + 1);
	}, [count]);
	const decrementCounter = useCallback(() => {
		setCount(count - 1);
	}, [count]);
	const incrementNumber = useCallback(() => {
		setNumber(number + 1);
	}, [number]);

	funccount.add(incrementCounter);//Each time the component renders, the three functions (incrementCounter, decrementCounter, and incrementNumber) are added to the funccount set.
	funccount.add(decrementCounter);
	funccount.add(incrementNumber);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				justifyContent: "end",
				margin: "auto",
				marginTop: "20px",
				width: "350px",
				padding: "50px",
				height: "300px",
				fontSize: "20px",
				boxShadow: "0px 2px 8px 4px grey",
				borderRadius: "5px",
			}}
		>
			{" "}
			
			<h4>React Example for useCallback Hook</h4>
			<p>Count: {count}</p>
			<p>Function Count: {funccount.size}</p>
			<button onClick={incrementCounter}>
				Increase counter
			</button>
			<button onClick={decrementCounter}>
				Decrease Counter
			</button>
			<button onClick={incrementNumber}>
				Increase number
			</button>
		</div>
	);
};

export default ExampleTwo;
//The useCallback hook regenerates the incrementCounter and decrementCounter functions because the count value has changed.
//When the incrementCounter function is recreated, it gets added to the funccount set again, along with decrementCounter.
//Since useCallback only regenerates functions when their dependencies change, incrementNumber does not change, as number is not modified in this step.