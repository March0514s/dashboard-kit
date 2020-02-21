import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import chartData from "../data/chartData"


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

  const renderLineChart = (
    <LineChart width={740} height={460} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0}}>
      <Line type="monotone" dataKey="Today" stroke="#8191ff" />
      <Line type="monotone" dataKey="Yesterday" stroke="#e3e4ee" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip/>
    </LineChart>
  );

  const mobileRenderLineChart = (
    <LineChart width={280} height={460} data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 0}}>
      <Line type="monotone" dataKey="Today" stroke="#8191ff" />
      <Line type="monotone" dataKey="Yesterday" stroke="#e3e4ee" />
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
