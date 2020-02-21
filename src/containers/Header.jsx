import React from "react";

import PageHeader from "../components/PageHeader";
import PageHeaderSearch from "../components/PageHeaderSearch";
import PageHeaderNotificationsButton from "../components/PageHeaderNotificationsButton";
import PageHeaderUserProfile from "../components/PageHeaderUserProfile";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  searchNotifications: {
    display: "flex",
    alignItems: "center"
  },
  divider: {
    height: "30px",
    borderRight: "3px solid #eaebf2",
    margin: "0 0 0 40px"
  },
  mobileDivider: {
    height: "30px",
    borderRight: "3px solid #eaebf2",
    margin: "0 0 0 10px"
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader title={props.title} />
      <div className={classes.searchNotifications}>
        <PageHeaderSearch />
        <PageHeaderNotificationsButton />
        <Hidden xsDown implementation="css">
          <div className={classes.divider} />
        </Hidden>
        <Hidden smUp implementation="css">
          <div className={classes.mobileDivider} />
        </Hidden>
        <PageHeaderUserProfile />
      </div>
    </div>
  );
}

export default Header;
