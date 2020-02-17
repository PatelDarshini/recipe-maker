/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

function PostViewer() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(undefined);
  const [selectedLoading, setSelectedLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  function loadPostData(postId) {
    setSelectedLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(response => response.json())
      .then(json => {
        setSelectedLoading(false);
        setSelectedPost(json);
      });
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
      <div style={{ border: "2px black solid" }}>
        {posts.length === 0 ? (
          <div>Loading....</div>
        ) : (
          <ul>
            {posts.map(post => {
              return (
                <li>
                  <a href="#" onClick={() => loadPostData(post.id)}>
                    {post.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div style={{ border: "2px black solid" }}>
        Individual Post Display
        {selectedLoading === true ? (
          <div>Loading....</div>
        ) : (
          selectedPost && <div>{selectedPost.body}</div>
        )}
      </div>
    </div>
  );
}

export default PostViewer;
