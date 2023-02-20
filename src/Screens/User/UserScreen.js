import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../Components/ScrollToTop'
import RegisterCompany from './RegisterCompany'

export default function UserScreen() {
  return (
    <>
    <ScrollToTop />
     <div className='text-2xl text-primary  font-bold m-5 text-center mb-10'>MainScreen</div>
                <div className="bg-primary">
                    <div className="container mx-auto flex flex-col items-center py-5 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                                The Freedom to Show
                                <span className="text-indigo-700"> Advertisement </span>
                                Where you want
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link to="/user/register" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</Link>
                        </div>
                    </div>
            {/* Code block ends */}

            <section class="text-gray-600 body-font mx-10 p-5">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Lorem ipsum dolor sit amet.
        <br class="hidden lg:inline-block" />readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sint perspiciatis obcaecati officiis, assumenda ipsam harum et asperiores corrupti illo excepturi repellat molestiae? Assumenda fugiat voluptatibus molestiae, unde tempora perferendis repellat excepturi consectetur, nisi necessitatibus enim distinctio ducimus veniam laudantium modi ipsum repellendus eius! Placeat, odit. Reiciendis, officiis corrupti? Hic, deleniti ut?</p>
    </div>
  </div>
</section>

       {/* Register Website with Us */ }

      <RegisterCompany />
        </div>
    </>
  )
}
