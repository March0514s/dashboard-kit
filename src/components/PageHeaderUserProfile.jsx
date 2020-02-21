import React from "react";

import srcImg from '../images/avatar.jpg';

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatar: {
    border: "2px double #e5e6ef",
    height: "50px",
    width: "50px",
  },
  mobile: {
    border: "2px double #e5e6ef",
    height: "50px",
    width: "50px",
    margin: "0 0px 0 10px"
  },
  text: {
    margin: "0 17px 0 40px",
  },
}));

function PageHeaderUserProfile() {
  const classes = useStyles();
  return (
    <div >
      <Hidden  xsDown implementation="css">
        <div className={classes.root}>
          <Typography className={classes.text} variant="body2">Jones Ferdinand</Typography>
          <Avatar className={classes.avatar} alt="Remy Sharp" src={srcImg} />
        </div>
      </Hidden>
      <Hidden smUp implementation="css">
        <Avatar className={classes.mobile} alt="Remy Sharp" src={srcImg} />
      </Hidden>
    </div>
  );
}

export default PageHeaderUserProfile;
