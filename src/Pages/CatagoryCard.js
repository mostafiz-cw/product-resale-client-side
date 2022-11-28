import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CatagoryCard = () => {
    const card = useLoaderData();
    console.log(card);

    return (
        <div>
            <p>Hello world</p>
        </div>
    );
};

export default CatagoryCard;