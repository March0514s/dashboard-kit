import React from "react";

// MUI
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(() => ({
  root: {
    color: "#4c4d57",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    height: "360px",
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 24px",
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "18px 24px",
    color: "#9fa2b4"
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
    "& h5": {
      fontWeight: "bolder"
    },
    "& p": {
      color: "#3751ff"
    }
  },
  caption: {
    color: "#9fa2b4",
    marginLeft: "8px",
    "& span": {
      color: "#6e7289",
      fontWeight: "bold"
    }
  },
  task: {
    display: 'flex', 
    alignItems: 'center'
  },
  chipUrgent: {
    background:'#fec400',
    color: '#fff',
  },
  chipNew: {
    background:'#29cc97',
    color: '#fff',
  },
  chipDefault: {
    background: '#f0f1f7',
    color: '#9fa2b4',
  },
}));

function TasksCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.headerRow}>
            <Typography align="left" variant="h5">
              Tasks
            </Typography>
            <Typography variant="body1">View all</Typography>
          </div>
          <Typography className={classes.caption} variant="caption">
            Today
          </Typography>
        </CardContent>
        <div className={classes.firstRow}>
          <Typography>Create new task</Typography>
          <Chip className={classes.chipDefault} size="small" label="+" onClick={() => null}></Chip>
        </div>
        <Divider />
        <div className={classes.row}>
          <div className={classes.task}>
          <Checkbox
            className={classes.checkbox}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            style={{margin: 0}}
          />
          <Typography>Finish ticket update</Typography>
          </div>
          <Chip className={classes.chipUrgent} size="small" label="URGENT"></Chip>
        </div>
        <Divider />
        <div className={classes.row}>
        <div className={classes.task}>
          <Checkbox
            className={classes.checkbox}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Typography>Create new ticket example</Typography>
          </div>
          <Chip className={classes.chipNew} size="small" label="NEW"></Chip>
        </div>
        <Divider />
        <div className={classes.divider} />
        <div className={classes.row}>
          <div className={classes.task}>
          <Checkbox
            className={classes.checkbox}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Typography>Update ticket report</Typography>
          </div>
          <Chip className={classes.chipDefault} size="small" label="DEFAULT"></Chip>
        </div>
      </Card>
    </div>
  );
}

export default TasksCard;
