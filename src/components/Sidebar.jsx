import React from "react";

import logo from "..\\images\\logo.png";

//MUI
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
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

const drawerWidth = 305;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    // Remove
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolBar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Sidebar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const selectIconTop = i => {
    switch (i) {
      case 0:
        return <DonutLargeOutlinedIcon />;
      case 1:
        return <ConfirmationNumberOutlinedIcon />;
      case 2:
        return <EmojiObjectsOutlinedIcon />;
      case 3:
        return <PeopleAltOutlinedIcon />;
      case 4:
        return <PersonOutlineOutlinedIcon />;
      case 5:
        return <MenuBookOutlinedIcon />;
      default:
        return null;
    }
  };

  const selectIconBottom = i => {
    switch (i) {
      case 0:
        return <SettingsOutlinedIcon />;
      case 1:
        return <CardMembershipOutlinedIcon />;
      default:
        return null;
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem>
        <ListItemIcon>{<img src={logo} />}</ListItemIcon>
        <ListItemText disableTypography>
          <Typography variant="h6" gutterBottom>
            Dashboard Kit
          </Typography>
        </ListItemText>
      </ListItem>
      <List>
        {["Overview", "Tickets", "Ideas", "Contacts", "Agents", "Articles"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{selectIconTop(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Settings", "Subscription"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{selectIconBottom(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
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
      <main className={classes.content}>
        
      </main>
    </div>
  );
}

export default Sidebar;
