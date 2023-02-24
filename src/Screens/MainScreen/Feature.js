import React from 'react'
import FeatureComponent from './FeatureComponent'

export default function Feature() {
  return (
    <section className="text-gray-600 body-font p-14">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Three main features of
      <br className="hidden sm:block" />InstAd
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <FeatureComponent name = "Targeted Advertising" desc = " Allow users to choose specific websites based on their target audience, interests, and demographics. This way, they can ensure that their ad is seen by the right people, increasing the chances of engagement and conversion."  />

        <FeatureComponent name = "Smart Contracts" desc = "Use smart contracts to automate the payment process and ensure that both parties are satisfied with the transaction. This feature will increase trust between advertisers and website owners"  />


        <FeatureComponent name = "Neptune" desc = "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde."  />
    </div>
  </div>
</section>
  )
}
