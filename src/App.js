import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import BalanceForm from './Components/BalanceForm';
import Navbar from './Components/Nav';
import { Container, Typography, Box } from '@material-ui/core';
import Footer from "./Components/footer"
import Transform from './Components/TransferForm';
import { AuthProvider } from './Components/AuthContext';

const App = () => {


  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              ERC20 Token Balance
            </Typography>
            <BalanceForm />
            <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
              Transfer ERC20 Tokens
            </Typography>
            <Transform />
          </Box>
        </Container>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
