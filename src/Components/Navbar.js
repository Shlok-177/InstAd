import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ConnectMetamaskButton from './ConnectMetamaskButton';


export default function Navbar() {
  return (
    <>
      <div>
        <section className="h-20 bg-primary">
          <nav className="flex text-white backdrop-filter backdrop-blur-lg bg-opacity-30 w-[100vw] border-b-[0.5px] border-gray-800 fixed">
            <div className="px-5 py-4 flex w-full">
              <Link className="text-5xl font-extrabold font-heading m-auto logo_font" to = "/">
                InstAd
              </Link>
              {/* <ul className="hidden md:flex px-6 mt-1 mx-auto font-semibold font-heading space-x-12">
                <li><Link className="hover:text-gray-200" to="/">Main Screen</Link></li>
                <li><Link className="hover:text-gray-200" to="/documantation">Documantation</Link></li>
              </ul> */}


              {/* <button type="button" className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-transparent rounded-[10px] border border-gray-200 hover:bg-gray-300 hover:text-gray-900 ">Link Your Account</button> */}

              {/* <ConnectMetamaskButton /> */}
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}
