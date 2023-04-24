import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png'
import ListItemComp from './ListItemComp';
import { Add, HomeRounded, LibraryBooks, Search, ThumbUpSharp } from '@mui/icons-material';
import { Divider } from '@mui/material';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <List>
        <ListItemComp text="" icon={<img src={logo} style={{ width: "120px" }} />} />
      </List>
      <List>
        <ListItemComp text="Home" icon={<HomeRounded style={{ fontSize: '30px' }} />} />
        <ListItemComp text="Search" icon={<Search style={{ fontSize: '30px' }} />} />
        <ListItemComp text="Your Library" icon={<LibraryBooks style={{ fontSize: '30px' }} />} />
      </List>
      <List>
        <ListItemComp text="Create Playlist" icon={<Add style={{ fontSize: '30px' }} />} />
        <ListItemComp text="Liked Songs" icon={<ThumbUpSharp style={{ fontSize: '30px' }} />} />
      </List>
      <Divider />
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', float: 'left' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          height: '0px',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ backgroundColor: 'black' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
