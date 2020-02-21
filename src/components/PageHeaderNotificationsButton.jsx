import React from "react";

//MUI
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#c8cad0"
  },
  
}));

function PageHeaderNotificationsButton() {
  const classes = useStyles();

  return (
    <>
      <NotificationsIcon className={classes.root} />
    </>
  );
}

export default PageHeaderNotificationsButton;
