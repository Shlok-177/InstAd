import React from 'react'
import ConnectMetamaskButton from '../../Components/ConnectMetamaskButton'
import FormFeild from './FormFeild'

export default function Register() {
  return (
    <>
        <ConnectMetamaskButton />
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
    <FormFeild />
    </>
  )
}
