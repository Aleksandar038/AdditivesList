import React from 'react';
import './Scroll.css';


const Scroll = (props) => {
    return (
        <div class="Scrollable">
            {props.children}
        </div>
    );
};

export default Scroll;