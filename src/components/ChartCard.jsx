import React from 'react'

// MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
      justifyContent: "space-between",
      alignItems: "center"
    },
    card: {
        height: '682px',
        margin: '20px 0'
    }
  }));

function ChartCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
            </Card>
        </div>
    )
}



export default ChartCard
