import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    height: "150px",
    marginTop: "55px",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: "#a2a5b6"
  },
  smallerCard: {
    height: "126px"
  },
}));

function StatusCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.smallerCard}>
        <CardContent>
          <Typography className={classes.title} align="center" variant="h6">
            {props.status}
          </Typography>
          <br />
          <Typography align="center" variant="h6">
            {props.amount}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default StatusCard;
