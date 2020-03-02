import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
function BlogList() {
  const [posts, setPosts] = useState([]);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    axios
      .get("https://us-central1-farm-budgeting.cloudfunctions.net/getPosts")
      .then(res => setPosts(res.data.data));
  }, []);
  return (
    <div className="containerform">
      <div>
        {posts.length === 0 ? (
          <div>
            <img src="C:\Users\Darshini\Downloads\iconfinder_Wait_132116.jpg"></img>
          </div>
        ) : (
          <div>
            {posts.map(post => {
              return (
                <>
                  <div>
                    <div>
                      <h2>
                        <Link to={url + "/view/" + post.id} className="link">
                          {post.title}
                        </Link>
                      </h2>
                      <span className="listspan">
                        {new Date(post.createdOn._seconds).toLocaleDateString()}
                      </span>
                      <span className="listspan">
                        {new Date(post.createdOn._seconds).toLocaleTimeString()}
                      </span>
                    </div>
                    <p>{post.post}</p>

                    <hr></hr>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default BlogList;
