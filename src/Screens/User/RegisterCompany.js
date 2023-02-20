import React from 'react'
import websites from './data';

export default function RegisterCompany() {
    return (
        <section class="text-gray-600 body-font mx-10 p-5">
            <h1 className='text-white text-3xl text-center my-10'>Registered Website With us</h1>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -mx-4 -my-8 justify-center">
                {
                            websites.map((res) => {
                                return (
                                    <div className="py-8 px-4 w-[30%] mx-3 my-3 bg-gray-900 rounded-3xl hover:scale-[1.05] transition-all duration-500">
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
        </section>
    )
}
