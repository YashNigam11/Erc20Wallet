import React, { useEffect, useState } from 'react';

import { AppBar, Toolbar, Typography, Button, IconButton, Box, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../hooks/useAuth';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LinkIcon from '@mui/icons-material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LOGO from "../assets/logo.png"
import Drop from "../assets/Frame.png"
import Link from '@mui/material/Link';
const Navbar = () => {
  const auth = useAuth()
  // const classes = useStyles()
  const { login, address, connect } = auth;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const shortenAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };
  return (
    <Toolbar position="static" elevation={0} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid container={'true'} spacing={4} sm={12} xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '95%' }}>
        <Grid item md={6} sm={12} xs={12} style={{ display: 'flex', justifyContent: "space-between" }}>
          <Link><img src={LOGO} alt="LOGO" style={{ height: 30, width: 30, }} /></Link>
          <Link color="inherit" underline="none" style={{ fontSize: "18px" }}>
            Home
          </Link>
          <Link color="inherit" underline="none" endIcon={<LinkIcon />} style={{ fontSize: "18px" }}>
            Demeter
          </Link>
          <Link color="inherit" underline="none" style={{ fontSize: "18px" }}>Buyback</Link>
          <Link color="inherit" underline="none" style={{ fontSize: "18px" }}>Stake</Link>
          <Link color="inherit" underline="none" style={{ fontSize: "18px" }}>Gauge</Link>
          <Link color="inherit" underline="none" style={{ fontSize: "18px" }}>Swap</Link>
          <Link
            color="inherit"
            underline="none"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleMoreClick}
            style={{ fontSize: "18px" }}
          >
            More
          </Link>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Grid container={'true'} item sx={12}>
            <Grid item md={2} sm={12} xs={12}>
            </Grid>
            <Grid item md={10} sm={12} xs={12} style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 8,
                    borderRadius: '10px',
                    border: 'none',
                    background: '#31C1BF',
                    boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12)',
                    color: '#DFDEDF',
                    userSelect: 'none',

                  }}
                >
                  Buy SPA & USDs
                </button>
              </div>

              <Link color="inherit" underline="none" endIcon={<ArrowDropDownIcon />} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ border: "1px solid black", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, }}>
                  <div style={{ marginRight: 5 }}>
                    <img src={Drop} alt="Drop" />
                  </div>
                  <div>
                    11155111
                  </div>
                </div>

              </Link>
              {connect && address ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 8,
                    borderRadius: '10px',
                    border: 'none',
                    background: '#31C1BF',
                    boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12)',
                    color: '#DFDEDF',
                  }}
                  onClick={login}
                >
                  {shortenAddress(address || '')}

                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 8,
                    borderRadius: '10px',
                    border: 'none',
                    background: '#31C1BF',
                    boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12)',
                    color: '#DFDEDF',
                  }}
                >
                  CONNECT WALLET
                </div>
              )}
              <IconButton
                edge="end"
                color="inherit"

              >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"

              >
                <MoreHorizIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Toolbar>

  );
};

export default Navbar;

