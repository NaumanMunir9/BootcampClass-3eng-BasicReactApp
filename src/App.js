import React from "react";
import Hello from "./Hello";

function App({ name, age }) {
  return (
    <div>
      Hello From {name}. He is {age - 10} years of age
      <br/>
      <br/>
      <Hello name='Nauman Munir' />
    </div>
  );
}

export default App;
