import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className = 'pa2'>
            <input 
                type='search' 
                placeholder='Search additives by their E-number' 
                className='pa3 ba bg-light-gray' 
                onChange={searchChange} />
        </div>
    );
}

export default SearchBox;