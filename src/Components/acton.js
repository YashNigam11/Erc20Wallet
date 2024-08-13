import Web3 from "web3";
import wethABI from "../abi/weth.json";

const web3 = new Web3(window.ethereum);
// Create a new instance of the Web3 contract
const contract = new web3.eth.Contract(
    wethABI,
    "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14" // WETH token address
);
// Function to get ERC20 token balance
export const getUserTokenBalance = async (address) => {
    try {
       // Call the balanceOf function from the ERC20 contract
        let response = await contract.methods.balanceOf(address).call();
        // Convert the balance from Wei to Ether (adjust this according to the token's decimals)
        let weiBalance = web3.utils.fromWei(response);
        return weiBalance;
    } catch (error) {
        console.error("Error getting token balance:", error);
        return null;
    }
};
// Function to transfer ERC20 tokens
export const transferToken = async (fromAddress, toAddress, amount) => {
    try {
      // Convert the balance from Wei to Ether (adjust this according to the token's decimals)
      let amountInWei = web3.utils.toWei(amount.toString(), 'ether');
    // Send the transaction to the contract
      let response = await contract.methods
        .transfer(toAddress, amountInWei)
        .send({ from: fromAddress });
   // Return the transaction receipt
      return response;
    } catch (error) {
      console.error("Error during token transfer:", error);
      throw error; 
    }
  };
  