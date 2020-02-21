import React from 'react'

import TicketCard from "../components/TicketCard";
import ChartCard from "../components/ChartCard";
import TasksCard from "../components/TasksCard";
import UnresolvedTickets from "../components/UnresolvedTickets";

// MUI
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    root: {
      marginLeft: " 0 ",
      flexGrow: 1,
    },
    mobileRoot: {
      marginLeft: " 0 ",
      flexGrow: 1
    },
  }));

function Overview() {
    const classes = useStyles();

    return (
        <>
        <Hidden xsDown implementatigion='css'>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    <TicketCard status="Unresolved" amount="60"/>
                    </Grid>
                    <Grid item xs>
                    <TicketCard status="Overdue" amount="16"/>
                    </Grid>
                    <Grid item xs>
                    <TicketCard status="Open" amount="43"/>
                    </Grid>
                    <Grid item xs>
                    <TicketCard status="On hold" amount="64"/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ChartCard/>
                    </Grid>    
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs>
                    <UnresolvedTickets/>
                    </Grid>
                    <Grid item xs>
                    <TasksCard/>
                    </Grid>
                </Grid>
            </div>
        </Hidden>
        <Hidden smUp implementation='css'>
            <div className={classes.mobileRoot}>
            <Grid container spacing={3}>
                <Grid item xs>
                <TicketCard status="Unresolved" amount="60"/>
                </Grid>
                <Grid item xs>
                <TicketCard status="Overdue" amount="16"/>
                </Grid>
                <Grid item xs>
                <TicketCard status="Open" amount="43"/>
                </Grid>
                <Grid item xs>
                <TicketCard status="On hold" amount="64"/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <ChartCard/>
                </Grid>    
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs>
                <UnresolvedTickets/>
                </Grid>
                <Grid item xs>
                <TasksCard/>
                </Grid>
            </Grid>
    </div>
        </Hidden>
    </>
    )
}



export default Overview
