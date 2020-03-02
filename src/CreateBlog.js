import React, { useState } from "react";

function CreateBlog() {
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

  return (
    <>
      <h1 className="titleh1">Blog</h1>
      <form action="" className="formcontainer">
        <label className="title">Title :</label>
        <input
          type="text"
          id="title"
          name="Title"
          placeholder="Title"
          value={postData.title}
          autoComplete="off"
          onChange={e => postDatas({ title: e.target.value })}
        ></input>

        <label className="post">Post :</label>
        <textarea
          rows="5"
          cols="50"
          name="Post"
          id="textarea"
          placeholder="Post"
          value={postData.post}
          autoComplete="off"
          onChange={e => postDatas({ post: e.target.value })}
        ></textarea>

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
    </>
  );
}

export default CreateBlog;
