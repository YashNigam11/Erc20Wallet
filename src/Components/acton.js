import Web3 from "web3";
import wethABI from "../abi/weth.json";

const web3 = new Web3(window.ethereum);

const contract = new web3.eth.Contract(
    wethABI,
    "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14" // WETH token address
);

export const getUserTokenBalance = async (address) => {
    try {
        let response = await contract.methods.balanceOf(address).call();
        let weiBalance = web3.utils.fromWei(response);
        return weiBalance;
    } catch (error) {
        console.error("Error getting token balance:", error);
        return null;
    }
};

export const transferToken = async (fromAddress, toAddress, amount) => {
    try {
      
      let amountInWei = web3.utils.toWei(amount.toString(), 'ether');
  
      let response = await contract.methods
        .transfer(toAddress, amountInWei)
        .send({ from: fromAddress });
  
      return response;
    } catch (error) {
      console.error("Error during token transfer:", error);
      throw error; 
    }
  };
  