import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function View() {
  let { id } = useParams();
  const [displayPost, setDisplayPost] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-farm-budgeting.cloudfunctions.net/getPost?id=" + id
      )
      .then(res => setDisplayPost(res.data.data));
  }, []);

  return (
    <div>
      {/* <h3>ID: {id}</h3> */}
      <div>
        <h2>{displayPost.title}</h2>
        {displayPost.post}
      </div>
    </div>
  );
}

export default View;
