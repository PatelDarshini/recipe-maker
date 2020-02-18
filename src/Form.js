import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Form.css";
import Table from "./Table";
import RecipeMaker from "./RecipeMaker";
import PostViewer from "./PostViewer";

function Form() {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({ title: "", post: "" });
  const [loading, setLoading] = useState(false);
  function postDatas(data) {
    setPostData({ ...postData, ...data });
  }
  console.log({ postData });
  async function submitData(e) {
    e.preventDefault();
    console.log(JSON.stringify(postData));
    setLoading(true);
    const response = await fetch(
      "https://us-central1-farm-budgeting.cloudfunctions.net/addPost",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(postData) // body data type must match "Content-Type" header
      }
    );
    setPostData({ title: "", post: "" });
    setLoading(false);
  }
  useEffect(() => {
    fetch("https://us-central1-farm-budgeting.cloudfunctions.net/getPosts", {
      method: "GET",
      mode: "no-cors"
    }).then(response => console.log(response));
    //   .then(text => {
    //     const data = JSON.parse(text);
    //     console.log(data);
    //     setPosts(data);
    //   });
  }, []);
  return (
    <>
      <Router>
        <div>
          <div className="topnav">
            <Link to="/food-items" className="link">
              Food Items
            </Link>

            <Link to="/recipe-maker" className="link">
              Recipe Maker
            </Link>

            <Link to="/post-viewer" className="link">
              Post Viewer
            </Link>
          </div>
          <Switch>
            <Route path="/food-items">
              <Table />
            </Route>
            <Route path="/recipe-maker">
              <RecipeMaker />
            </Route>
            <Route path="/post-viewer">
              <PostViewer />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <form action="" className="formcontainer">
        <div className="form-group">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            name="Title"
            placeholder="Title"
            value={postData.title}
            autoComplete="off"
            onChange={e => postDatas({ title: e.target.value })}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="post">Post :</label>
          <textarea
            rows="5"
            cols="50"
            name="Post"
            placeholder="Post"
            value={postData.post}
            autoComplete="off"
            onChange={e => postDatas({ post: e.target.value })}
          ></textarea>
        </div>

        <button
          type="button"
          className="submitbutton"
          value="Submit"
          disabled={loading === true}
          onClick={e => submitData(e)}
        >
          {loading === true ? "Submiting..." : "Submit"}
        </button>
      </form>

      <div className="containerform">
        <div>
          <h3>This is table</h3>
          <h4>Date:</h4>
        </div>
        <div>
          {posts.map(post => {
            return <div>{post.id}</div>;
          })}
        </div>
      </div> */}
    </>
  );
}
export default Form;
