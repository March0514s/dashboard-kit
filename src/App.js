import React from "react";

import Header from "./containers/Header";
import Overview from "./containers/Overview";
import Tickets from "./containers/Tickets";
import Sidebar from "./components/Sidebar";

//MUI
import { makeStyles} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  content: {
    margin: " 25px 37px 0 320px ",
  },
  mobileContent: {
    margin: " 25px 20px 0 20px ",
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <>  
        <Hidden xsDown implementation="css">
          <Sidebar/>
          <main className={classes.content} >
            <Header title="Overview"/>
            <Overview />
            {/* <Header title="Tickets"/>
                <Tickets/> */}
          </main>
        </Hidden>
        <Hidden smUp implementation="css">
          <Sidebar/>
          <main className={classes.mobileContent} >
            <Header title="Overview"/>
            <Overview />
            {/* <Header title="Tickets"/>
                <Tickets/> */}
          </main>
        </Hidden>
    </>
  );
}

export default App;
