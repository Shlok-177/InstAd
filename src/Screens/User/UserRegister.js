import React, { useState } from 'react';
import AdForm from './AdForm';
import websites , { categories } from './data';






const UserRegister = () => {
    const [selectedWebsites, setSelectedWebsites] = useState([]);


    return (
        <div className="text-white">
            <AdForm categories={categories} websites={websites} />
        </div>
    );
};

export default UserRegister;
