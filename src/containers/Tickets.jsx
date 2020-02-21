import React, { useEffect, setState } from "react";

import Ticket from '../components/Ticket';
import data from '../data/data';

// MUI
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

// Icons
import SortIcon from "@material-ui/icons/Sort";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const useStyles = makeStyles(() => ({
  root: {
    color: "#4c4d57",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    marginTop: "55px",
    marginBottom: "40px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
    "& h5": {
      fontWeight: "bolder"
    },
    "& p": {
      color: "#72768c"
    },
    "& p:nth-child(2)": {
      marginRight: "40px"
    },
    "& svg": {
      marginRight: "12px"
    }
  },
  lastRow: {
    padding: "20px",
    display: "flex",
    justifyContent: "flex-end",
    color: "#c6c7d2",
    margin: "0 20px",
    alignItems: "center",
    "& span": {
      color: "#71758c",
      fontWeight: "bolder"
    },
    "& p:first-child": {
      marginRight: "75px"
    },
    "& p:nth-child(2)": {
      marginRight: "75px"
    }
  },
  chipUrgent: {
    background: "#fec400",
    color: "#fff"
  },
  chipNew: {
    background: "#29cc97",
    color: "#fff"
  },
  chipDefault: {
    background: "#f0f1f7",
    color: "#9fa2b4"
  },
  sortFilter: {
    display: "flex"
  },
  avatar: {
    border: "2px double #e5e6ef",
    height: "50px",
    width: "50px",
    marginRight: "27px"
  },
  tableCell: {
    display: "flex",
    alignItems: "center"
  },
  tableCellData: {
    display: "flex",
    flexDirection: "column",
    "& p:first-child": {
      fontWeight: "bolder"
    },
    "& p:last-child": {
      color: "#c6c8ce"
    }
  }
}));

function Tickets(props) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.headerRow}>
                <Typography align="left" variant="h5">
                  All tickets
                </Typography>
                <div className={classes.sortFilter}>
                  <SortIcon />
                  <Typography variant="body2">Sort</Typography>
                  <FilterListIcon />
                  <Typography variant="body2">Filter</Typography>
                </div>
              </div>
            </CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ticket details</TableCell>
                    <TableCell>Customer name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(ticket => (
                    <Ticket
                      subject={ticket.ticketDetails.subject}
                      updated={ticket.ticketDetails.updated}
                      name={ticket.customerName.name}
                      date={ticket.customerName.date}
                      FormatedDate={ticket.Date.FormatedData}
                      time={ticket.Date.time}
                      priority={ticket.Priority}
                    />
                  )) }
                </TableBody>
              </Table>
            </TableContainer>
            <Divider />
            <div className={classes.divider} />
            <div className={classes.lastRow}>
              <Typography variant="body1">
                Rows per page: <span>8</span>
              </Typography>
                  <Typography variant="body1">1 - 8 of {data.length}</Typography>
              <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default Tickets;
