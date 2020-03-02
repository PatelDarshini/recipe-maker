import React from "react";
import "./App.css";
import Counter from "./Counter";
import Table from "./Table";
import Table2 from "./Table2";
import RecipeMaker from "./RecipeMaker";
import PostViewer from "./PostViewer";
import Blog from "./Blog";
import Routers from "./Route";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
function App() {
  const names = [
    { name: "Sanket", age: 12 },
    { name: "Darshini", age: 34 }
  ];

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
      {/* <Table />  */}
      {/*<Table2 />*/}
      {/* <RecipeMaker /> */}
      {/* <PostViewer /> */}
      {/* <Blog /> */}
      <Routers />
      {/* <BlogList /> */}
      {/* <CreateBlog /> */}
    </>
  );
}

export default App;
