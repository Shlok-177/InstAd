import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { Player } from '@livepeer/react';

export default function CompanyScreen() {


    const [videoLink, setVidoLink] = useState('https://youtu.be/Uh-N_6Lccr4');
    let video;

    video = document.getElementsByTagName('iframe');
    function removeControls(video) {
        video.controls = false;

    }


    return (
        <>
            <div className='text-2xl text-primary  font-bold m-5 text-center mb-10'>MainScreen</div>
            <div className="bg-primary">
                <div className="container mx-auto flex flex-col items-center py-5 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                            The Freedom to Show
                            <span className="text-indigo-700"> Advertisement </span>
                            Which you want
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to="/company/register" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</Link>
                        <a href='https://shlok-jadeja.gitbook.io/documentation-of-instad/' className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Show Documantation</a>
                    </div>

                    <Player
                        playbackId="4201jtj7pql2mm3u"
                        aspectRatio="16to9"
                        objectFit="cover"
                        showLoadingSpinner={true}
                        autoPlay={true}
                        loop={true}
                    />



                </div>

                {/* Code block ends */}
            </div>
        </>
    )
}
