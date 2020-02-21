import React from "react";

// MUI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  root: {
    color: '#4c4d57',
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    height: "360px",
    marginBottom: "20px"
    
  },
  row: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '18px 24px',
      '& p:last-child':{
          color: '#9fa2b4',
      }
  },
  headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '5px',
      '& h5': {
          fontWeight: 'bolder'
      },
      '& p': {
          color: '#3751ff'
      }
  },
  caption: {
      color: '#9fa2b4',
      marginLeft: '8px',
      '& span': {
        color: '#6e7289',
          fontWeight: 'bold'
      },
  }
}));

function UnresolvedTickets(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
          <CardContent>
            <div className={classes.headerRow}>
                <Typography  align="left" variant="h5">
                    Unresolved tickets
                </Typography>
                <Typography  variant="body1">
                    View details
                </Typography>
            </div>
            <Typography className={classes.caption} variant="caption">
                Group: <span>Support</span>
            </Typography>
        </CardContent>
          <div className={classes.row}>
            <Typography>Waiting on Feature Request</Typography>
            <Typography>4238</Typography>
          </div>
            <Divider />
          <div className={classes.row}>
            <Typography>Awaiting Customer Response</Typography>
            <Typography>1005</Typography>
          </div >
            <Divider />
          <div className={classes.row}>
          <Typography>Awaiting Developer Fix</Typography>
          <Typography>914</Typography>
          </div>
          <Divider fullWidth/>
          <div className={classes.divider}/>
          <div className={classes.row}>
          <Typography>Pending</Typography>
          <Typography>281</Typography>
          </div>
      </Card>
    </div>
  );
}

export default UnresolvedTickets;
