import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
// import CompanyList from "./CompanyList";
// import CompanyDetail from "./CompanyDetail";
// import JobList from "./JobList";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";
// import Logout from "./Logout";
// import PrivateRoute from "./PrivateRoutes";
// import Profile from "./Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"> 
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes