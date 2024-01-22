import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SportsSoccerIcon />
      </ListItemIcon>
      <ListItemText primary="Football" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SportsBasketballIcon />
      </ListItemIcon>
      <ListItemText primary="Basketball" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SportsBaseballIcon />
      </ListItemIcon>
      <ListItemText primary="Basketball"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SportsRugbyIcon />
      </ListItemIcon>
      <ListItemText primary="Rugby" />
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <MoreHorizIcon />
      </ListItemIcon>
      <ListItemText secondary="More Sports Soon" disable/>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);