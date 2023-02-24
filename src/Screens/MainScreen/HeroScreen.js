import React from 'react'
import { Link } from 'react-router-dom'
import Feature from './Feature'

export default function HeroScreen() {

  return (
    <div className="bg-primary">
            <section className="h-96 mt-36 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                    Monetize Your Website with InstAd's
                         <span className="text-indigo-400"> Decentralized Advertising Platform </span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Connecting advertisers and website owners with the power of blockchain. Maximize your ad revenue and simplify payments with Shardeum.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link to = "/company" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Company
                        </Link>
                        <Link to = "/user" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                            User
                        </Link>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>

            <Feature />
        </div>
  )
}
