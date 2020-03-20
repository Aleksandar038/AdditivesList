import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className = 'pa2'>
            <input 
                type='search' 
                placeholder='Search additives by their E-number' 
                className='pa3 bg-dark-gray bg-animate hover-bg-black near-white w-50' 
                onChange={searchChange} />
        </div>
    );
}

export default SearchBox;