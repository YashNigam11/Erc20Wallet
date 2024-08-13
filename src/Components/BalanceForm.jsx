import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { ethers } from 'ethers';
const BalanceForm = ({ getBalance }) => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(0.00);
    const [error, setError] = useState('');
    const [tokenAddress, setTokenAddress] = useState('');

    const ERC20_ABI = [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "type": "function"
        }
    ];

    const TOKENS = [
        { name: 'USDT (Tether)', address: '0xdac17f958d2ee523a2206206994597c13d831ec7' },
        { name: 'USDC (USD Coin)', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' },
        { name: 'DAI (Dai Stablecoin)', address: '0x6b175474e89094c44da98b954eedeac495271d0f' },
        { name: 'LINK (Chainlink)', address: '0x514910771af9ca656af840dff83e8264ecf986ca' },
        { name: 'UNI (Uniswap)', address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984' },
        { name: 'Pendle', address: '0x808507121B80c02388fAd14726482e061B8da827' },
        { name: 'mPendleOFT', address: '0x83e817E1574e2201a005EC0f7e700ED5606F555E' },
    ];



    const fetchBalance = async (address, tokenAddress) => {

        const web3 = new Web3('https://eth.llamarpc.com');



        let contract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
        const balance = await contract.methods.balanceOf(address).call();
        console.log(balance, "balance")
        const gasEstimate = await contract.methods.balanceOf(address).estimateGas();

        const formatBalacne = (web3.utils.fromWei(balance.toString(), "ether"))
        return formatBalacne
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setBalance(null);
        try {
            const balance = await fetchBalance(address, tokenAddress);
            setBalance(balance);
        } catch (err) {
            setError('Failed to fetch balance. Please check the address and try again.');
        }
    };

    return (
        <>
            <Box my={4}
                style={{
                    backgroundColor: 'grey',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: '#F4F6F8',
                    width: "540px"
                }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginLeft: "10px", marginBottom: "10px", textAlign: "left", fontSize: "18px", fontWeight: 700 }} >Ethereum Address:</div>
                    <TextField
                        // label="Ethereum Address"
                        value={address}
                        placeholder='Enter Ethereum Address'
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        required
                        style={{
                            width: '500px',
                            height: '40px',
                            padding: '10px',
                            borderRadius: '12px',
                            border: '2px solid white',
                            backgroundColor: '#ffffff',
                            // opacity: 0, 
                        }}
                        InputProps={{ disableUnderline: true }}
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel id="token-select-label">Select Token</InputLabel>
                        <Select
                            labelId="token-select-label"
                            value={tokenAddress}
                            onChange={(e) => setTokenAddress(e.target.value)}
                            style={{
                                '& .MuiSelect-select': {
                                    padding: '12px 14px',  // Adjust padding
                                    borderRadius: '8px',   // Rounded corners
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dcdcdc', // Outline color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#aaa',    // Outline color on hover
                                },
                            }}
                        >
                            {TOKENS.map((token) => (
                                <MenuItem key={token.address} value={token.address}>
                                    {token.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                  
                    <Box mt={2}>
                        <Button type="submit" variant="contained" style={
                            {
                                width: "90px",
                                height: "38px",
                                padding: "20px",
                                margin: "10px",
                                borderRadius: "15px",
                                background: "#31C1BF",
                                color: "#FFFFFF",
                                fontSize: "18px"

                            }
                        }>
                            Submit
                        </Button>
                    </Box>
                </form >

            </Box >

            <Box style={{
                backgroundColor: 'grey',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: '#F4F6F8',
                width: "540px",
                marginTop: "40px"
            }}>
                <div style={{ height: "50px" }}>

                </div>
                <div style={{
                    // borderTop: '1px solid grey',
                    background: '#ffffff',

                    padding: '16px',
                }}
                >
                    {balance !== null && (
                        <Box style={{
                            display: 'flex', alignItems: 'center', mt: 2, display: 'flex',
                            justifyContent: "space-between"
                        }}>
                            <Typography variant="h6">Token Balance</Typography>
                            <Typography variant="h6" style={{ marginLeft: '8px', fontWeight: 700 }}>{balance}</Typography>
                        </Box>
                    )}
                    {
                        error && (
                            <Box mt={2}>
                                <Typography color="error">{error}</Typography>
                            </Box>
                        )
                    }
                </div>

            </Box>
        </>
    );
};

export default BalanceForm;
