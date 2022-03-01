import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
import AddProject from "./components/AddProject";
import {Provider} from "./context";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import Test from "./components/Test";

function App() {
  return (
    <Provider>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Contact" component={Contact} />
        <Route
          exact
          path="/write-a-recommendation"
          component={WriteRecommendation}
        />
        <Route exact path="/all-projects" component={AllProjects} />
        <Route exact path="/project/add" component = {AddProject}/>
        <Route exact path="/project/:id" component={ProjectPage} />
        <Route exact path="/Test" component={Test}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
