import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, } from '@mui/icons-material';
import Logo from "../assets/logo.png"
import USD from "../assets/usd.png"
import SPA from "../assets/Frame.png"
import vespa from "../assets/vespa.png"
import wspa from "../assets/wspa.png"
import Fram1 from "../assets/Frame (1).png"
import Fram2 from "../assets/Frame (2).png"
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaDiscord, FaMedium } from 'react-icons/fa';
const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#F4F6F8',
                color: '#404B51',
                py: 4,
                mt: 4,
            }}
        >
            <Box>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between" style={{ padding: 20}}>
                    <Grid item xs={12} md={1} marginLeft={7}>
                        <Box display="flex" alignItems="center">
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ maxHeight: 50, marginRight: 16 }}
                            />
                       <Button
                            variant="contained"
                            href="#"
                            sx={{ marginRight: 2, border: "1px solid #E7ECEF", background: "#E7ECEF", color: "black" }}
                        >
                            Forum
                        </Button>
                        <Button
                            variant="contained"

                            href="#"
                            sx={{ border: "1px solid #E7ECEF", background: "#E7ECEF", color: "black" }}
                        >
                            Snapshot
                        </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} >


                    </Grid>
                    <Grid item xs={12} md={2} marginRight={6}>
                      
                        <Box display="flex" justifyContent="flex-end" >
                            <IconButton href="#" color="inherit">
                                <FaDiscord size={24} />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <LinkedIn />
                            </IconButton>
                            <IconButton aria-label="Medium">
                                <FaMedium size={24} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* List of Content Sections */}
                <Grid container spacing={2} mt={0}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 2,
                                fontSize: "20px"
                            }}
                            gutterBottom
                        >
                            <img
                                src={USD}
                                alt="Logo"
                                style={{ marginRight: 10, verticalAlign: 'middle' }}
                            />
                            USDs Arbitrum
                            <IconButton>
                             <CopyIcon />
                            </IconButton>
                        </Box>
                        <Box style={{marginLeft: 70}}>
                        <Link href="#" color="inherit" underline="none" display="block" textAlign="inherit">
                            <img
                                src={Fram1}
                                alt="Logo"
                                style={{ marginRight: 10 }}
                            />
                            <img
                                src={Fram2}
                                alt="Logo"
                            //   style={{ marginTop: 16 }}
                            />
                        </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} mt={2}>
                        <Box
                            component="div"
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // gap: 1,
                                fontSize: "20px"
                            }}
                            gutterBottom
                        >
                            <img
                                src={SPA}
                                alt="Logo"
                                style={{ marginRight: 10, verticalAlign: 'middle' }}
                            />
                            SPA Arbitrum
                            <IconButton>
                                <ArrowDropDownIcon /> <CopyIcon />
                            </IconButton>
                        </Box>

                        <IconButton style={{marginLeft: 65}}>
                            <img
                                src={Fram1}
                                alt="Logo"
                                style={{ marginRight: 10 }}
                            />
                            <img
                                src={Fram2}
                                alt="Logo"

                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} mt={2}>
                        <Box
                            component="div"
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // gap: 1,
                                fontSize: "20px"
                            }}
                            gutterBottom
                        >
                            <img
                                src={vespa}
                                alt="Logo"
                                style={{ marginRight: 10, verticalAlign: 'middle' }}
                            />
                            veSPA Arbitrum
                            <IconButton>
                                <ArrowDropDownIcon /> <CopyIcon />
                            </IconButton>
                        </Box>




                    </Grid>
                    <Grid item xs={12} sm={6} md={3} mt={2}>
                        <Box
                            component="div"
                            sx={{
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 1,
                                fontSize: "20px"
                            }}
                            gutterBottom
                        >
                            <img
                                src={wspa}
                                alt="Logo"
                                style={{ marginRight: 10, verticalAlign: 'middle' }}
                            />
                            wSPA Arbitrum
                            <IconButton>
                                <CopyIcon />
                            </IconButton>
                        </Box>
                        <Box marginLeft={8}>
                        <div style={{ marginTop: 10, fontSize: "18px" }}>
                            {`SPA -> wSPA`}
                        </div>
                        <div style={{ marginTop: 10, fontSize: "18px" }}>
                            Sperax-Arbitrum Bridge
                        </div>
                        </Box>

                    </Grid>
                </Grid>


                <Box textAlign="center" mt={4}>
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Sperax Inc. All rights reserved.
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default Footer;
