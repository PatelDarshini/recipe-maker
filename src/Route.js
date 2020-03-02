import React from "react";

import Table from "./Table";
import RecipeMaker from "./RecipeMaker";
import PostViewer from "./PostViewer";
import Blog from "./Blog";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
function Routers() {
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

            <Link to="/blog" className="link">
              Blog
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
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default Routers;
