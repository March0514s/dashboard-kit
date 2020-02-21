import React from 'react'

import TicketCard from "../components/TicketCard";
import ChartCard from "../components/ChartCard";
import TasksCard from "../components/TasksCard";
import UnresolvedTickets from "../components/UnresolvedTickets";

// MUI
import Grid from '@material-ui/core/Grid';

function Overview() {
    return (
        <>
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
    </>
    )
}



export default Overview
