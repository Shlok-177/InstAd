import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import ConnectMetamaskButton from '../../Components/ConnectMetamaskButton';
import { categories } from '../User/data';

export default function FormFeild() {

    const [WalletData, setWalletData] = useState();
    const [category, setCategory] = useState('');
    const [open, setOpen] = React.useState(false);

    const [AdData, setAdData] = useState({
        siteName: '',
        approxVisitors: '',
        startingDate: new Date().toISOString().substring(0, 10),
        descOfsite: ''
    })

    function handleData(dataFromChild) {
        setWalletData(dataFromChild);
        console.log(WalletData);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const changeHandler = (event) => {
        let { name, value } = event.target;
        setAdData((Prev) => {
            return {
                ...Prev,
                [name]: value,
                "adType": category,
                "walletAddress": WalletData
            }
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };



    const saveData = async (e) => {
        e.preventDefault();
        console.log(AdData);

        const PostData = {
            companyWalletAddress: WalletData[0],
            category: category,
            siteLink: AdData.siteName,
            visitors: AdData.approxVisitors,
            desc: AdData.descOfsite,
        }
        console.log(PostData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(PostData)
        };

        // let res = await axios.post('http://localhost:4000/api/company/addcompany' , PostData);
        let res = await fetch('http://localhost:4000/api/company/addcompany', requestOptions)
        let xyz = await res.json();
        console.log(xyz);

        setOpen(true);
        setAdData({
            siteName: '',
            approxVisitors: 0,
            startingDate: new Date().toISOString().substring(0, 10),
            descOfsite: ''
        })
    }

    return (
        <>
            <ConnectMetamaskButton onData={handleData} />
            <div className='text-white text-3xl font-extrabold text-center my-12 flex flex-col items-center'>
                <h1 className=''>Register Your Self First</h1>
                <div className='flex content-between'>
                    {/* <hr className='border-b-[1px] bg-white w-[120px] text-white mt-8 '/>
            <hr className='border-b-[1px] bg-white w-[50px] text-white mt-8 ml-5 '  />
            <hr className='border-b-[1px] bg-white w-[120px] text-white mt-8 ml-5' /> */}
                    {/* <hr className='border-b-[1px] bg-white w-[5px] text-white mt-8 ml-5' /> */}
                    {/* <hr /> */}
                </div>
            </div>
            <div>
                <form className="bg-gray-900 rounded-xl w-[50%] m-auto" onSubmit={saveData}>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 m-5">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Site Name
                            </label>
                            <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="text" name='siteName' placeholder="https://shlokjadeja.tech/" onChange={changeHandler} value={AdData.siteName} />
                        </div>
                        <div className="w-full px-3 m-5">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Approx Visitors
                            </label>
                            <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="number" name='approxVisitors' placeholder="selecct Approx number of Visitors" onChange={changeHandler} value={AdData.approxVisitors} />
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

                        <div className="w-full px-3 m-5">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Starting Date
                            </label>
                            <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="date" name='startingDate' placeholder="" onChange={changeHandler} value={AdData.startingDate} />
                        </div>

                        <div className="w-full px-3 m-5">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Add discription Of your Site :-
                            </label>
                            <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="text" name='descOfsite' placeholder="" onChange={changeHandler} value={AdData.descOfsite} />
                        </div>

                        <div className="w-full px-3 m-5">
                            <button type="submit" className="text-primary bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Submit</button>
                        </div>

                    </div>
                </form>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Data Added Succesfuly 👍
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}
