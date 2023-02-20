import React from 'react'

export default function FeatureComponent(props) {
  return (
    <div className="p-4 md:w-1/3 flex">
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    </div>
    <div className="flex-grow pl-6">
      <h2 className="text-white text-lg title-font font-medium mb-2">{props.name}</h2>
      <p className="leading-relaxed text-base">{props.desc}</p>
    </div>
  </div>
  )
}
