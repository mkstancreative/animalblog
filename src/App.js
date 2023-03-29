import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import Error404 from "./components/pages/Error404";
import AddEditBlog from "./components/pages/AddEditBlog";
import BlogDetails from "./components/pages/BlogDetails";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/pages/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/pages/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/pages/error404">
          <Error404 />
        </Route>
        <Route exact path="/pages/addeditblog/">
          <AddEditBlog />
        </Route>
        <Route exact path="/pages/editblog/:id">
          <AddEditBlog />
        </Route>
        <Route exact path="/pages/blog-details/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
