import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchConatiner = () => {
    return ( 
        <div className="search-container flex-cc">
            <input type="search" name="search-query" className="search-bar" id="search" />
            <span className="search-icon" id="search-icon">
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    className='icon'
                />
            </span>
        </div>
     );
}
 
export default SearchConatiner;
