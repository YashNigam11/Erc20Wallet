import React, { createContext, useEffect, useState } from 'react';
import Web3, { ContractCodeNotStoredError } from 'web3';


const defaultProvider = {
    address: null,
    connect: false,
    provider: null,
    contract: null,
    loading: true,
    setAddress: () => null,
    setProvider: () => null,
    setLoading: () => null,
    login: () => Promise.resolve()

}
const AuthContext = createContext(defaultProvider)
const AuthProvider = ({ children }) => {
    const [address, setAddress] = useState(defaultProvider.address)
    const [connect, setConnect] = useState(defaultProvider.connect)
    const [provider, setProvider] = useState(defaultProvider.provider)

    const [contract, setContract] = useState(defaultProvider.contract)
    const [loading, setLoading] = useState(defaultProvider.loading)

    const init = async()=>{
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            // establish connection with your wallet
            try {
                const accounts = await web3.eth.getAccounts();
                await window.ethereum.request({ method: "eth_requestAccounts" })
                setContract(contract)
                setAddress(accounts[0]);
                setProvider(web3);
                setConnect(true)
            } catch (error) {
                console.error('User denied account access', error);
            }
        } else {
            alert('Please install MetaMask to use this feature.');
        }
    }
    useEffect(()=>{
        
        init()
    })
    const handleLogin = async () => {
        init()
    }
    const values = {
        address,
        connect,
        contract,
        provider,
        loading,
        setAddress,
        setLoading,
        login: handleLogin
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
export { AuthContext, AuthProvider }