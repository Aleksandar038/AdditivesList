import React from 'react';
import './Card.css';

const Card = ({ Code, Image1, Name, Type, Status, MoreInfo1 }) => {
        return ( 
            <div className = {`dib ma3 grow-large bw5 shadow-5 tc w5 pointer ${Status}`}>
                <div className = 'pa3'>
                    <div id = "myCardTitle">
                        <h2> {Code} </h2> 
                    </div> 
                    <div id = "myCardPicture"> 
                        <img src={Image1} width = '100px' height = '100px' alt = "Additive" /> 
                    </div> 
                    <div id = "data" >
                        <p className='chemName'> {Name} </p> 
                        <p> {Type} </p>
                    </div> 
                    <div id = "myMoreInfoButton">
                        <a className = 'customButton' href = {MoreInfo1} > Find out more </a> 
                    </div>
                </div>
                <div className={`pa2 ${Status}`}>
                    <span className='safetyLevel'> {Status} </span> 
                </div>
            </div>
        );
        };

        export default Card;