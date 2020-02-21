import React from "react";

//MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    fontWeight: "bold"
  }
}));

function PageHeader(props) {
  const classes = useStyles();
  return(
    <>
    <Typography className={classes.root} variant="h5">
      {props.title}
    </Typography>

  </>
  )
  
}

export default PageHeader;
