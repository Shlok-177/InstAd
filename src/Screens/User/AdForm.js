import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ConnectMetamaskButton from '../../Components/ConnectMetamaskButton';
import ScrollToTop from '../../Components/ScrollToTop';
import ABI from '../../ABI.json';
import { ethers, Log } from 'ethers';

const AdForm = ({ categories, websites, onSelectedWebsites }) => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('news');
    const [adFile, setAdFile] = useState(null);
    const [sidebarsite, setsidebarsite] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [receiverAddress, setReceiverAddress] = useState();
    const [receiverDate, setReceiverDate] = useState();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);

    };

    useEffect(() => {
        const selectedWebsite = websites.filter((website) =>
            (website.adType === category && website.occupied === false) ? true : false
        );

        if (selectedWebsite.length !== 0) {
            console.log('Selected website:', selectedWebsite);
            setsidebarsite(selectedWebsite);
        } else {
            setsidebarsite(selectedWebsite);
            setOpen(true);
        }
    }, [category, websites]);

    const handleFileChange = (event) => {
        setAdFile(event.target.files[0]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            _adID: 123,
            _vid: "123",
            _title: title,
            _adtype: category,
            _shower: receiverAddress,
            _date: 20
        }

        try {
            // Connect to the user's Ethereum wallet
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = provider.getSigner();

            // Load the contract using the contract address and ABI
            const contractAddress = '0x7D15df83D0de8e28b62C12B909BeDEeCb120C815';
            const contractABI = ABI; // Replace this with the ABI of your ERC20 contract
            const crypto = new ethers.Contract(contractAddress, contractABI, signer);

            // Transfer tokens to the receiver address
            console.log("Hey");
            const tx = await crypto.setAdCreator(data._adID, data._vid, data._title, data._adtype, data._shower, data._date);
            console.log(`Transaction hash: ${tx.hash}`);
          } catch (error) {
            console.error(error);
          }
    };



    return (
        <>
            {/* Form Code  */}
            <ScrollToTop />
            <h2 className='text-white text-center text-3xl my-10'>Submit an Advertisement</h2>
            <div className='flex flex-row '>
                <div className="form w-[60%]">
                    <div className='m-5 p-5'>
                        <form onSubmit={handleSubmit}>
                            <div className="w-full px-3 m-5">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Wallte Address :
                                </label>
                                <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="link" name='linkOfAd' placeholder="" onChange={(e) => setUsername(e.target.value)} value={username} />
                            </div>
                            <div className="w-full px-3 m-5">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Advertisement Title :
                                </label>
                                <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="link" name='linkOfAd' placeholder="" onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="w-full px-3 m-5">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                    Category:
                                </label>
                                <select className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="link" name='linkOfAd' placeholder="" value={category} onChange={handleCategoryChange} >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='w-full px-3 m-5'>
                                <label className="block text-sm font-medium text-white">Upload Ad:</label>
                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600 ">
                                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-gray-900 font-medium text-[10px] text-white px-3 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <input name="file-upload" type="file" onChange={handleFileChange} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">MP4 , JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full px-3 m-5'>

                                <button className='text-primary bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='w-[40%]'>
                    <div className='flex flex-col justify-evenly mt-10 p-10'>
                        {
                            sidebarsite.map((res, index) => {
                                return (
                                    <div key={index} className={`py-8 px-4 w-[80%] my-2 bg-gray-900 rounded-3xl hover:cursor-pointer transition-all duration-500 ${selectedCard === index ? 'transform scale-105 bg-black' : ''}`} onClick={() => { setReceiverAddress(res.walletAddress); setReceiverDate(res.time); handleCardClick(index);}} >

                                        <div className="h-full flex items-start">
                                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{res.time.toLocaleString('en-US', { month: 'long' })}</span>
                                                <span className="font-medium text-lg text-white title-font leading-none">{res.time.toLocaleDateString().split('/')[1]}</span>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">{res.adType}</h2>
                                                <h1 className="title-font text-xl font-medium text-white mb-3">{res.cName}</h1>
                                                <p className="leading-relaxed mb-1">{res.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    No available websites match the <b className='text-base'>{category}</b>  category
                </Alert>
            </Snackbar>
        </>
    );
};

export default AdForm;
