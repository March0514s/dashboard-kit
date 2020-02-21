import React from "react";

//MUI
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
      color: "#c8cad0",
      marginRight: "25px"
  },
  mobile: {
      color: "#c8cad0",
      marginRight: "10px"
  },
}));

function PageHeaderSearch() {
  const classes = useStyles();

  return (
    <>
      <Hidden xsDown implementation="css">
        <SearchIcon className={classes.root} />
      </Hidden>
      <Hidden smUp implementation="css">
        <SearchIcon className={classes.mobile} />
      </Hidden>
    </>
  );
}

export default PageHeaderSearch;
