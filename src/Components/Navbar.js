import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ConnectMetamaskButton from './ConnectMetamaskButton';


export default function Navbar() {
  return (
    <>
      <div>
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-primary text-white ">
            <div className="px-5 py-4 flex w-full">
              <a className="text-2xl font-bold font-heading" href="/">
                Logo Here
              </a>
              <ul className="hidden md:flex px-6 mt-1 mx-auto font-semibold font-heading space-x-12">
                <li><Link className="hover:text-gray-200" to="/">Main Screen</Link></li>
                <li><Link className="hover:text-gray-200" to="/documantation">Documantation</Link></li>
              </ul>


              {/* <button type="button" className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-transparent rounded-[10px] border border-gray-200 hover:bg-gray-300 hover:text-gray-900 ">Link Your Account</button> */}
              <ConnectMetamaskButton />
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}
