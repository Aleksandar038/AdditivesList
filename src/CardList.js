import React from 'react';
import { Elist } from './Elist.js';
import Card from './Card.js';

const CardList = () => {
    return ( 
        <div>
            <Card ID = { Elist[0].Code }
            Code = { Elist[0].Code }
            Name = { Elist[0].Name }
            Type = { Elist[0].Colour }
            Status = { Elist[0].Status }
            Image1 = { Elist[0].Image1 }
            MoreInfo1 = { Elist[0].MoreInfo1 }
            /> 

            <Card ID = { Elist[1].Code }
            Code = { Elist[1].Code }
            Name = { Elist[1].Name }
            Type = { Elist[1].Colour }
            Status = { Elist[1].Status }
            Image1 = { Elist[1].Image1 }
            MoreInfo1 = { Elist[1].MoreInfo1 }
            /> 

            <Card ID = { Elist[2].Code }
            Code = { Elist[2].Code }
            Name = { Elist[2].Name }
            Type = { Elist[2].Colour }
            Status = { Elist[2].Status }
            Image1 = { Elist[2].Image1 }
            MoreInfo1 = { Elist[2].MoreInfo1 }
            />  
        </div>

    );
}



export default CardList;