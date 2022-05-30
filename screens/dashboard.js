import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';
import NavList from '../components/navlist';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <NavList liName="Posts" pathLink="posts" />
        <NavList liName="Comments" pathLink="comments" />
        <NavList liName="Albums" pathLink="albums" />
        <NavList liName="Photos" pathLink="photos" />
        <NavList liName="Todos" pathLink="todos" />
        <NavList liName="Users" pathLink="users" />
        <Divider />

      </Drawer>

      <Outlet />
    </Box>
  );
}
