import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'


const ConnectMetamaskButton = () => {

    const [errorMessage , setErrorMessage] = useState(null);
    const [defaultAccount , setDefaultAccount] = useState(null);
    const [userBalance , setUserBalance] = useState(null);

    const connectWalletHandler = () =>{
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged([result[0]])

            })
        }
        else {
            setErrorMessage('Install MetaMask Please .... !!')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName);
        console.log(defaultAccount);
        console.log(userBalance);
    }

    const getUserBalance = (accountAddress) =>{
        window.ethereum.request({method: 'eth_getBalance' , params: [String(accountAddress) , "latest" ]}).then(balance =>{
          setUserBalance(ethers.formatEther(balance));
        }).catch(err => console.log("this err accure"  + err))
    }


    return (
        <>
            <button className='py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-transparent rounded-[10px] border border-gray-200 hover:bg-gray-300 hover:text-gray-900' onClick={connectWalletHandler}>Conncet Your Wallate</button>
        </>
    );
}

export default ConnectMetamaskButton;