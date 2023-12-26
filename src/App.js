import React  from "react";
import { useState } from "react";
import "./App.css"

function App() {
	const  [count, setCount] = useState(0);
	const [click , setClick] =  useState(true);
	
	const fun = (num) => {
		 console.log("your count value is change");
		 let i = 0;
		 while(i < 1000000000) i++;
		return  num;
	}

	let test = fun(count); 
     
	return (
		<>
			<div className="main" >
				<p>React Counter :  {test}</p>
			   <button className="btn" onClick={ () => setCount(count + 1) } >Click me !</button>
			   <br/>
			   <button onClick={() =>  setClick(!click)} > { click ? 'Stop' : 'Start'} </button>
			</div>
		</>
	)
}
export default App;
