import { Alert, Box, Snackbar, Modal, Typography, CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ScrollToTop from '../../Components/ScrollToTop';
import ABI from '../../ABI.json';
import { ethers, logger } from 'ethers';
import { useCreateAsset } from '@livepeer/react';
import { useDropzone } from 'react-dropzone';


const AdForm = ({ categories, websites, onSelectedWebsites }) => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('news');
    const [sidebarsite, setsidebarsite] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [receiverAddress, setReceiverAddress] = useState();
    const [receiverDate, setReceiverDate] = useState();
    const [video, setVideo] = useState();
    /*Modal on submit button*/
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const style = {
        backgroundColor: '#0D1117CF',
        borderRadius: '4px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(1px)',
        p: 2,
        maxWidth: '400px',
        minHeight: '300px',
        margin: 'auto',
        mt: '20vh',
        color: 'white',

    };
    // console.log(websites);
    const {
        mutate: createAsset,
        data: asset,
        status,
        progress,
        error,
    } = useCreateAsset(
        video
            ? {
                sources: [{ name: video.name, file: video }]
            }
            : null,
    );

    const onDrop = useCallback(async (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
            setVideo(acceptedFiles[0]);
        }
    }, []);


    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'video/*': ['*.mp4'],
        },
        maxFiles: 1,
        onDrop,
    });

    const progressFormatted = useMemo(
        () =>
            progress?.[0].phase === 'failed'
                ? 'Failed to process video.'
                : progress?.[0].phase === 'waiting'
                    ? 'Waiting'
                    : progress?.[0].phase === 'uploading'
                        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}`
                        : progress?.[0].phase === 'processing'
                            ? `Processing: ${Math.round(progress?.[0].progress * 100)}`
                            : null,
        [progress],
    );



    const contractAddress = '0xD60244ABD90e5FFf345c96ffCfB28181C286B3Bf';

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
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



    const mint = async () => {

        if (asset?.[0]?.playbackId) {
            handleCloseModal();


        }
    }

    const submit = async (e) => {
        e.preventDefault();
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contractInstance = new ethers.Contract(contractAddress, ABI, signer);
            console.log("Minting!!");
            try {
                const data = {
                    _adID: 123,
                    _vid: asset[0].playbackId,
                    _title: title,
                    _adtype: category,
                    _shower: receiverAddress,
                    _date: 20
                }
                console.log(asset[0].playbackId);

                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // const provider = new ethers.providers.Web3Provider(window.ethereum);
                // const signer = provider.getSigner();

                // ! Load the contract using the contract address and ABI

                const crypto = new ethers.Contract(contractAddress, ABI, signer);
                const tx = await crypto.setAdCreator(data._adID, data._vid, data._title, data._adtype, data._shower, data._date);

                // // ! to recevie the data from the BlockChain
                //    let allAds = crypto.getAdDetails(data._adID).then((res)=>{
                //     console.log(res)
                // });
                // console.log(allAds);


                console.log(`Transaction hash: ${tx.hash}`);
            }
            catch (err) {
                console.log(err);
            }
        const PostData = {
            shardeumToken : 0.001,
            data: new Date(),
            playbackId : asset[0].playbackId,
            companyWalletAddress: receiverAddress,
            adOwnerWalletAddress : '0xdfsgsdsdgsdg'
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(PostData)
        };

        let res = await fetch('https://instad-backend-production.up.railway.app/api/company/addAd', requestOptions)
        let xyz = await res.json();

        console.log(xyz);


        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(contractAddress, ABI, signer);

            await contractInstance.sendShardeum(receiverAddress, { value: 1000000000000000 }).then(res => console.log(res))
        }
    }

    useEffect(() => {
        mint();
    });


    useEffect(() => {
        const selectedWebsite = websites.filter((website) =>
            (website.category === category) ? true : false
        );

        if (selectedWebsite.length !== 0) {
            console.log('Selected website:', selectedWebsite);
            setsidebarsite(selectedWebsite);
        } else {
            setsidebarsite(selectedWebsite);
            setOpen(true);
        }
    }, [category, websites]);

    return (
        <>
            {/* Form Code  */}
            <ScrollToTop />
            <h2 className='text-white text-center text-3xl my-10'>Submit an Advertisement</h2>
            <div className='flex flex-row '>
                <div className="form w-[60%]">
                    <div className='m-5 p-5'>
                        <form >
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
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p className='drag'>{video ? video.name : "Drag and drop or browse files"}
                                            <br />
                                            {progressFormatted && progressFormatted}
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className='w-full px-3 m-5'>

                                <button className='text-primary bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none' onClick={(e) => {
                                    e.preventDefault()
                                    handleOpenModal();
                                    createAsset?.();


                                }} disabled={!createAsset || status === 'loading'}>Upload</button>
                                {
                                    asset?.[0]?.playbackId ? <button onClick={submit} className= 'text-primary bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'>submit</button> : <button disabled className='text-primary bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'>Submit</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>


                <div className='w-[40%]'>
                    <div className='flex flex-col justify-evenly mt-10 p-10'>
                        {
                            sidebarsite.map((res, index) => {
                                return (
                                    <div key={index} className={`py-8 px-4 w-[80%] my-2 bg-gray-900 rounded-3xl hover:cursor-pointer transition-all duration-500 ${selectedCard === index ? 'transform scale-[1.05] bg-indigo-700' : ''}`} onClick={() => { setReceiverAddress(res.companyWalletAddress); handleCardClick(index); }} >

                                        <div className="h-full flex items-start">
                                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                {/* <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{res.time.toLocaleString('en-US', { month: 'long' })}</span>
                                                <span className="font-medium text-lg text-white title-font leading-none">{res.time.toLocaleDateString().split('/')[1]}</span> */}
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">{res.category}</h2>
                                                <h1 className="title-font text-xl font-medium text-white mb-3">{res.siteLink}</h1>
                                                <p className="leading-relaxed mb-1">{res.des}</p>
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


            <Modal
                open={openModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1" sx={{ fontFamily: 'monospace', textAlign: 'center', marginY: '10px' }} >
                        Progress:-

                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: 'monospace', textAlign: 'center', marginY: '20px' }}>
                        <CircularProgress color='inherit' />
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: 'monospace', textAlign: 'center', marginY: '20px' }}>
                        {progressFormatted && progressFormatted}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default AdForm;
