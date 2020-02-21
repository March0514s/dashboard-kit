import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./containers/Header";
import Overview from "./containers/Overview";
import Tickets from "./containers/Tickets";
import Sidebar from "./components/Sidebar";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  content: {
    margin: " 25px 37px 0 320px "
  },
  mobileContent: {
    margin: " 25px 20px 0 20px "
  }
}));

function App(props) {
  const classes = useStyles();

  const hOverview = () => {
    return (
      <>
        <Header title="Overview" />
        <Overview />
      </>
    );
  };

  const hTickets = () => {
    return (
      <>
        <Header title="Tickets" />
        <Tickets />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Hidden xsDown implementation="css">
        <Sidebar />
        <main className={classes.content}>
          <Route exact path="/" component={hOverview} />
          <Route exact path="/tickets" component={hTickets} />
          
        </main>
      </Hidden>
      <Hidden smUp implementation="css">
        <Sidebar />
        <main className={classes.mobileContent}>
          <Route exact path="/" component={hOverview} />
          <Route exact path="/tickets" component={hTickets} />
        </main>
      </Hidden>
    </BrowserRouter>
  );
}

export default App;
