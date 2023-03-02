import React, { useEffect, useState } from 'react';
import AdForm from './AdForm';
import createWebsites , { categories } from './data';






const UserRegister = () => {
    const [selectedWebsites, setSelectedWebsites] = useState([]);
    const [websites , setWebsites]  = useState([]);

    useEffect(()=>{
        createWebsites().then(websites => {
            setWebsites(websites);
            console.log(websites);
        });
    } , [])


    return (
        <div className="text-white">
            <AdForm categories={categories} websites={websites} />
        </div>
    );
};

export default UserRegister;
