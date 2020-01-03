import React from 'react';
import { Elist } from './Elist.js';
import Card from './Card.js';

const CardList = ( {Elist} ) => {
    const cardsArray = Elist.map((Code, i) => {
        return (<Card 
        key={Elist[i].Code}
        Code={Elist[i].Code}
        Name={Elist[i].Name}
        Type={Elist[i].Type}
        Status={Elist[i].Status}
        Image1={Elist[i].Image1}
        MoreInfo1={Elist[i].MoreInfo1}/>)
    })
    return ( 
        <div>
            {cardsArray}
        </div>

    );
}

export default CardList;