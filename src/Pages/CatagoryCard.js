import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const CatagoryCard = () => {
    const cards = useLoaderData();
    console.log(cards);

    return (
        <div>
            {
                cards.map(card => <Cards key={card._id} card={card}></Cards>)
            }
        </div>
    );
};

export default CatagoryCard;