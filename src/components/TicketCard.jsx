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
        height: '150px',
        marginTop: '55px',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            border: '1px solid #7688ff',
            color: '#7688ff',
            cursor: 'pointer',
        '& *': {
            color: '#7688ff'
        }
        },
    },
    title: {
        color: '#a2a5b6'
    }
  }));

function TicketCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent >
                    <Typography className={classes.title} align='center' variant="h6">
                        {props.status}    
                    </Typography>
                    <br/>
                    <Typography align='center' variant="h3">
                        {props.amount}    
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}



export default TicketCard
