import React, { useState } from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  IconButton,
  AppBar,
  Typography,
  Box,
  Toolbar,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail"; 
import AccountCircle from "@mui/icons-material/AccountCircle";

const anchor = "left";
const Header = () => {
  const [auth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const [sideBarIsOpened, setSideBarIsOpened] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && ["Tab", "Shift"].includes(event.key)) {
      return;
    }
    setSideBarIsOpened(open);
  };
  const list = (anchor) => (
    <Box>
      <Typography sx={{ mt: "20px" }} align="center" variant="h5">
        fun-meetings
      </Typography>
      <Divider sx={{ mt: "12px" }} />
      <Box
        sx={{ width: 220, mt: 1 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const SideBar = () => {
    return (
      <Box>
        <Drawer
          anchor={anchor}
          open={sideBarIsOpened}
          onClose={toggleDrawer(false)}
        >
          {list(anchor)}
        </Drawer>
      </Box>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            fun-meetings
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {sideBarIsOpened && <SideBar />}
    </Box>
  );
};

export default Header;

// <Nav id="header-nav" >
//   <Logo>fun-Meet</Logo>
//   <Menu>
//     <Item>
//       <Link className="nav-link" to="profile">
//         Profile
//       </Link>
//     </Item>
//     <Item>
//       <Link className="nav-link" to="/auth/login">
//         Login
//       </Link>
//     </Item>
//   </Menu>
//   <NavIcon onClick={() => toggleNav(!toggle)}>
//     <Line open={toggle} />
//     <Line open={toggle} />
//     <Line open={toggle} />
//   </NavIcon>
// </Nav>
// <Overlay open={toggle}>
//   <OverlayMenu open={toggle}>
//     <Item>
//       <Link className="nav-link" to="profile">
//         Profile
//       </Link>
//     </Item>
//     <Item>
//       <Link className="nav-link" to="/auth/login">
//         Login
//       </Link>
//     </Item>
//   </OverlayMenu>
// </Overlay>
