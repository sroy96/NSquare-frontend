import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./components/landing/Landing";
import Homepage from "./components/toppage/Homepage";
import {withRouter} from "react-router";

function App() {
  return (
      <Router>
          <Route exact path={"/"} component={withRouter(Landing)} />
          <Route exact path={"/home"} component={withRouter(Homepage)} />
          {/*<Route exact path={"/home/:course"} component={CoursePage} />*/}
          {/*<Route exact path={"/:course/:id"} component={QuestionPage} />*/}
          {/*<Route exact path={"/profile"} component={Profile} />*/}
      </Router>
  );
}

export default App;
