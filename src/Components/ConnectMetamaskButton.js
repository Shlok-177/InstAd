import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ConnectMetamaskButton = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState("Not Connected");
    const [userBalance, setUserBalance] = useState();
    const [open, setOpen] = React.useState(false);


    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChanged([result[0]]);
                    setOpen(true);

                })
        }
        else {
            setErrorMessage('Install MetaMask Please .... !!')
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
      };

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName);
        console.log(defaultAccount);
        console.log(userBalance);
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] }).then(balance => {
            setUserBalance(ethers.formatEther(balance));
        }).catch(err => console.log("this err accure" + err))
    }


    return (
        <>
        <div className='flex my-5 justify-between mx-5'>
        <div className='text-white text-base'>
            <span> Account:- {defaultAccount} </span>
            <br /><br />
            <span> Balance:-  {userBalance}</span>
        </div>
            <button className='focus:outline-none focus:ring-2 focus:ring-offset-2  bg-transparent transition duration-150 ease-in-out hover:bg-white hover:text-primary lg:text-xl font-semibold  rounded text-white px-5 border border-white py-2 text-sm font-mono ' onClick={connectWalletHandler}>Conncet Your Wallate</button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Wallate Connected successfully
                </Alert>
            </Snackbar>
        </>
    );
}

export default ConnectMetamaskButton;