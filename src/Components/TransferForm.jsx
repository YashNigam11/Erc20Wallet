import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Web3 from 'web3';
import { useAuth } from '../hooks/useAuth';
import { transferToken } from "../Components/acton"
const TransferForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  const [complete,setComplete] =useState(false);
  const [trxnSuccess,setTrxnSucess] =useState("")
  const [hash,setHash]= useState("")
  const auth = useAuth()
  const { address } = auth

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    let fromAddress = address;
    let toAddress = recipient;
    console.log(fromAddress,"fromeADress")
    try {
      let res = await transferToken(fromAddress, toAddress, amount);
      console.log("Transfer successful:", res,res.transactionHash);
      if(res.transactionHash){
        setComplete(true)
        setTrxnSucess("SuccessFull Trxn Completed")
        setHash(res.transactionHash)
      }
      
      
    } catch (error) {
      console.error("Error during transfer:", error);
    }
  };
  
  return (
    <form  onSubmit={handleSubmit}
      style={{
        backgroundColor: 'grey',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: '#F4F6F8',
        width: "540px"
      }}>
      <div style={{ marginLeft: "10px", marginBottom: "10px", textAlign: "left", fontSize: "18px", fontWeight: 700 }} >Reciepient's Ethereum Address:</div>
      <TextField
        // label="Recipient Address"
        placeholder='Enter Reciepient Ethereum Address'
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
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
      <div style={{ marginLeft: "10px", marginTop: "10px", textAlign: "left", fontSize: "18px", fontWeight: 700 }}>Token Amount:</div>
      <TextField
        // label="Amount"
        value={amount|| ""}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        placeholder='Enter Token Amount'
        style={{
          width: '500px',
          height: '40px',
          padding: '10px',
          borderRadius: '12px',
          border: '2px solid white',
          backgroundColor: '#ffffff',
          marginTop: "10px",
          // opacity: 0, 
        }}
        InputProps={{ disableUnderline: true }}
      />
      {complete ? <div style={{fontSize:"18px", color:"Green"}}>{trxnSuccess}
        <a href= {`https://sepolia.etherscan.io/tx/${hash}`} target="_blank" rel="noopener noreferrer">Go to Transaction hash </a>
      </div> : null}
      <Button type="submit" variant="contained" color="primary" style={{
        width: "120px",
        height: "38px",
        padding: "20px",
        margin: "10px",
        borderRadius: "15px",
        background: "#31C1BF",
        color: "#FFFFFF",
        fontSize: "18px"

      }}
     >
        Transfer
      </Button>
    </form>
  );
};

export default TransferForm;
