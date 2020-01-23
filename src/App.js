import React from 'react';
import './App.css';
import Counter from './Counter';
import Table from "./Table";
import Table2 from "./Table2";
function App() {
  const names = [{ name: "Sanket", age: 12 }, { name: "Darshini", age: 34 }];


  return (
    //     <div className="App">
    //       <h1>Hello CodeSandbox</h1>
    // -
    //       {/* {timeline.map(time => {
    //         return <Counter key={time} displayValue={time} />;
    //       })} */}

    //       <ul>
    //         {names.map(nameObj=>{
    //           return <li>{nameObj.name}={nameObj.age} </li>
    //         })}
    //         </ul>



    //     </div>
    <>
      {/* <Table /> */}
      <Table2/>
    </>

  );
}

export default App;
