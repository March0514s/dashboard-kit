import React from "react";

import logoSrc from '../images/logo.png';

//MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//Icons
import DonutLargeOutlinedIcon from "@material-ui/icons/DonutLargeOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import CardMembershipOutlinedIcon from "@material-ui/icons/CardMembershipOutlined";

const drawerWidth = "280px";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  logo: {
    color:'#7b7d88',
    fontWeight: 'bold',
    margin: "21px 0px 35px 15px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  divider:{
    border: "1px solid #3b3c45"
  },
  drawerContent: {
    width: "100%",
    overflow: "hidden",
    '& ul div *': {
      marginLeft: "15px",
    },
    '& ul div svg': {
      marginRight: "25px",
    },
    '& ul div:hover ': {
      borderLeft: "3px solid white",
      background: "#3e4049",
      color: "#fff",
      '& svg': {
        color: "#fff",
      }
    },

  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'#a6a9ba',
    background: 'green',
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  listButton:{
    display: "flex",

  },
  listItem: {
    color:'#a6a9ba',
    height: '60px',
    width: '100%',
    '& svg': {
      color:'#a6a9ba',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#363740",
    display: "flex",
    alignItems: "center"
  },
  content: {
    margin: " 25px 37px 0 37px ",
    flexGrow: 1,
  },
}));

function Sidebar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawerContent}>
      <ListItem className={classes.logo}>
        <ListItemIcon>{<img alt="Dashboard Kit" src={logoSrc} />}</ListItemIcon>
        <ListItemText disableTypography>
          <Typography variant="h6">
            Dashboard Kit
          </Typography>
        </ListItemText>
      </ListItem>
      <List>
        {[{icon:<DonutLargeOutlinedIcon />, label:"Overview"}, 
          {icon:<ConfirmationNumberOutlinedIcon />, label:"Tickets"}, 
          {icon:<EmojiObjectsOutlinedIcon />, label:"Ideas"}, 
          {icon:<PeopleAltOutlinedIcon />, label:"Contacts"}, 
          {icon:<PersonOutlineOutlinedIcon />, label:"Agents"}, 
          {icon:<MenuBookOutlinedIcon />, label:"Articles"}].map(
          (x) => (
            <ListItem button key={x.label} className={classes.listItem}>
                {x.icon}
                {x.label}
            </ListItem>
          )
        )}
      </List>
      <div className={classes.divider}/>
      <List>
        {[{icon:<SettingsOutlinedIcon />, label:"Settings"}, 
          {icon:<CardMembershipOutlinedIcon />, label:"Subscription"}].map((x) => (
          <ListItem button key={x.label} className={classes.listItem}>
            {x.icon}
            {x.label}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="section buttons">
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Sidebar;
