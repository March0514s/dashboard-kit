import React from "react";

import srcImg from "../images/avatar.jpg";

//MUI
import Chip from "@material-ui/core/Chip";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Icons
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
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
      },
    },
    lowChip:{
        background: '#fec400',
        color: '#ffffff'
      },
      normalChip:{
        background: '#29cc97',
        color: '#ffffff'
      },
      highChip:{
        background: '#f12b2c',
        color: '#ffffff'
      }
  }));

function Ticket(props) {
    const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tableCell}>
        <Avatar className={classes.avatar} alt={props.name} src={srcImg} />
        <div className={classes.tableCellData}>
  <Typography variant="body1">{props.subject}</Typography>
  <Typography variant="body1">{props.updated}</Typography>
        </div>
      </TableCell>
      <TableCell>
        <div className={classes.tableCellData}>
  <Typography variant="body1">{props.name}</Typography>
  <Typography variant="body1">{props.date}</Typography>
        </div>
      </TableCell>
      <TableCell>
        <div className={classes.tableCellData}>
  <Typography variant="body1">{props.FormatedDate}</Typography>
  <Typography variant="body1">{props.time}</Typography>
        </div>
      </TableCell>
      <TableCell>
          {props.priority === 'low' ?
            <Chip className={classes.lowChip} label={props.priority} /> :
            props.priority === 'normal' ?
            <Chip className={classes.normalChip} label={props.priority} /> :      
            <Chip className={classes.highChip} label={props.priority} />
        }
        
      </TableCell>
      <TableCell>
        <MoreVertIcon />
      </TableCell>
    </TableRow>
  );
}

export default Ticket;
