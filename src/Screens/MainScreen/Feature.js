import React from 'react'
import FeatureComponent from './FeatureComponent'

export default function Feature() {
  return (
    <section className="text-gray-600 body-font p-14">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Raw Denim Heirloom Man Braid
      <br className="hidden sm:block" />Selfies Wayfarers
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <FeatureComponent name = "Shooting Stars" desc = "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde."  />
        <FeatureComponent name = "The Catalyzer" desc = "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde."  />
        <FeatureComponent name = "Neptune" desc = "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde."  />
    </div>
  </div>
</section>
  )
}
