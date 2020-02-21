import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


import StatusCard from "./StatusCard";

// MUI
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "630px",
    margin: "20px 0",
    '& h6': {
        margin: '34px',
        '& span': {
            fontWeight: 'lighter',
            color: '#cccdd7',
            fontSize: '1rem'
        }
    }
  },
  smallerCards: {
    margin: "20px 0",
  }
}));

function ChartCard(props) {
  const classes = useStyles();
  const data = [
    {name: '0', 'this month': 13, 'last month': 34}, 
    {name: '1', 'this month': 20, 'last month': 36}, 
    {name: '2', 'this month': 29, 'last month': 33}, 
    {name: '3', 'this month': 27, 'last month': 28}, 
    {name: '4', 'this month': 25, 'last month': 23}, 
    {name: '5', 'this month': 31, 'last month': 25}, 
    {name: '6', 'this month': 40, 'last month': 26}, 
    {name: '7', 'this month': 47, 'last month': 32}, 
    {name: '8', 'this month': 50, 'last month': 34}, 
    {name: '9', 'this month': 40, 'last month': 32}, 
    {name: '10', 'this month': 26, 'last month': 31}, 
    {name: '11', 'this month': 19, 'last month': 25}, 
    {name: '12', 'this month': 8, 'last month': 18}, 
    {name: '13', 'this month': 24, 'last month': 16}, 
    {name: '14', 'this month': 34, 'last month': 22}, 
    {name: '15', 'this month': 43, 'last month': 31}, 
    {name: '16', 'this month': 46, 'last month': 43}, 
    {name: '17', 'this month': 44, 'last month': 29}, 
    {name: '18', 'this month': 42, 'last month': 32}, 
    {name: '19', 'this month': 37, 'last month': 35},
    
  ]

  const renderLineChart = (
    <LineChart width={740} height={460} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0}}>
      <Line type="monotone" dataKey="this month" stroke="#8191ff" />
      <Line type="monotone" dataKey="last month" stroke="#e3e4ee" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip/>
    </LineChart>
  );

  const mobileRenderLineChart = (
    <LineChart width={280} height={460} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0}}>
      <Line type="monotone" dataKey="this month" stroke="#8191ff" />
      <Line type="monotone" dataKey="last month" stroke="#e3e4ee" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip/>
    </LineChart>
  )

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item sm={8} xs={12}>
          <Card className={classes.card}>
              <div>
                  <Typography variant='h6'>
                      Today's trends<br/><span>as of 25 May 2019, 09:41 PM</span>
                  </Typography>
                  <Typography variant='body2'>
                      
                  </Typography>
              </div>
              <Hidden smUp implementation="css">
                <div>
                {mobileRenderLineChart}
                </div>
              </Hidden>
              <Hidden xsDown implementation="css">
                <div>
                {renderLineChart}
                </div>
              </Hidden>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12} >
            <div className={classes.smallerCards}>
          <StatusCard status="Resolved" amount="449" />
          <StatusCard status="Received" amount="426" />
          <StatusCard status="Average first response time" amount="33m" />
          <StatusCard status="Average response time" amount="3h 8m" />
          <StatusCard status="Resolution within SLA" amount="94%" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChartCard;
