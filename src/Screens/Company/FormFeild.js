import React, { useState } from 'react'

export default function FormFeild() {



    const [AdData, setAdData] = useState({
        siteName: '',
        approxVisitors: 0,
        chargesPerDay: 0,
        startingDate: new Date().toISOString().substring(0, 10),
        totalDays: 5,
        totalCrypto: 0,
        linkOfAd: ''
    })


    const changeHandler = (event) => {
        let { name, value } = event.target;
        setAdData((Prev) => {
            return {
                ...Prev,
                [name]: value
            }
        })
    }



    const saveData = (e) => {
        e.preventDefault();

        console.log(AdData);
    }

    return (
        <>
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
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Crypto Chareg per day
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="text" name='chargesPerDay' placeholder="" onChange={changeHandler} value={AdData.chargesPerDay} />
                    </div>
                    <div className="w-full px-3 m-5">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Starting Date
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="date" name='startingDate' placeholder="" onChange={changeHandler} value={AdData.startingDate} />
                    </div>

                    <div className="w-full px-3 m-5">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                            How many Days you want to Show your site to given Site ?
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="number" name='totalDays' placeholder="" onChange={changeHandler} value={AdData.totalDays} min={5} />
                    </div>


                    <div className="w-full px-3 m-5">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Total Money For show your advertise
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="number" name='totalCrypto' placeholder="" readOnly onChange={changeHandler} value={AdData.totalDays*AdData.chargesPerDay} />

                        {/*
                      <div className='mt-6'>
                        <label className="block text-sm font-medium text-white">Cover photo</label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600 ">
                              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>700
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="w-full px-3 m-5">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Add Link Of your Advertisment
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-white border rounded-md bg-gray-800  border-gray-800 outline-none" id="grid-last-name" type="link" name='linkOfAd' placeholder="" onChange={changeHandler} value={AdData.linkOfAd} />
                    </div>

                    <div className="w-full px-3 m-5">
                        <button type="submit" className="text-primary bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">Submit</button>
                    </div>

                </div>
            </form>
        </div>
        </>
    )
}
