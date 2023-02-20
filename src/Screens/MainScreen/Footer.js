import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-primary border-t-[1px] border-gray-800 body-font">
  <div className="container px-5 py-5 mx-auto flex justify-center">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <span className="ml-3 text-xl logo_font">InstAd</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 InstAd
    </p>
  </div>
</footer>
  )
}
