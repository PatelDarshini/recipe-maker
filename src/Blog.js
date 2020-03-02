import React from "react";
import "./Blog.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import View from "./View";
function Blog() {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <Link to={url + "/createblog"}>
          <div className="createblogbutton">
            <button type="button">CreateBlog</button>
          </div>
        </Link>

        <Switch>
          <Route exact path={path}>
            <BlogList />
          </Route>
          <Route path={path + "/createblog"}>
            <CreateBlog />
          </Route>
          <Route path={path + "/view/:id"}>
            <View />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Blog;
