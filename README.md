# Welcome to A InstAd

InstAd is a decentralized digital advertising platform that utilizes blockchain technology to bring trust, transparency, and fairness to the digital advertising industry. The platform connects advertisers who want to place ads on websites with website owners who are willing to display those ads.

## Feature 

1. Targeted Advertising 
Allow users to choose specific websites based on their target audience, interests, and demographics. This way, they can ensure that their ad is seen by the right people, increasing the chances of engagement and conversion.

2. Smart Contract
Use smart contracts to automate the payment process and ensure that both parties are satisfied with the transaction. For example, if an advertiser pays for five days of advertising but the website owner does not display the ad, the payment will be automatically refunded to the advertiser.

3. Crypto Payment
The Publisher must pay 0.001 SHM in this case for five days before their advertisement appears on the company's website. 

# InstAd Integration for React Only For Those who want to show advertisement on their site

InstAd is a decentralized digital advertising platform that utilizes blockchain technology to bring trust, transparency, and fairness to the digital advertising industry. This document will guide you on how to integrate InstAd in your React application.

## Prerequisites
1. A valid wallet address to register your company on InstAd.

2. React version 16 or above.

3. Basic knowledge of React and JavaScript.


## Installation

1. In your React project directory, install the axios package to make HTTP requests to InstAd API:

### `npm install axios`

2. Add the following code to the React file where you want to show the InstAd advertisement:

``` 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InstAd() {
  const [url, setUrl] = useState('');

  const fetchAd = async () => {
    const walletAddress = 'YOUR_WALLET_ADDRESS'; // Replace with your company's wallet address
    const response = await axios.get(`https://instad-backend-production.up.railway.app/api/company/${walletAddress}`);
    const adData = response.data[response.data.length - 1];
    setUrl(`https://lp-playback.com/hls/${adData.playbackId}/static360p0.mp4`);
  }

  useEffect(() => {
    fetchAd();
  }, []);

  return (
    <div>
      {url !== '' ? (
        <video controls={false} autoPlay={true} loop={true} muted width="100%">
          <source src={url} type="video/mp4" />
        </video>
      ) : (
        <p>No ads available</p>
      )}
    </div>
  );
}

export default InstAd;
```
 
3. Replace YOUR_WALLET_ADDRESS with your company's wallet address. You can find this address after registering your company on InstAd.

4. Save the file and run your React app. You should now see the InstAd advertisement in the component where you added the code.

# Conclusion

Congratulations! You have successfully integrated InstAd in your React app. By using InstAd, you can ensure that your digital ads are displayed on websites that match your target audience, while also ensuring that the payment process is automated and transparent. If you have any questions or feedback, please contact InstAd support.
