import React from 'react';
import './search-box.css'

export const SearchBox = ({placeholder, eventHandler}) => (
    <input className="search"
        type="search" 
        placeholder={placeholder}
        onChange={eventHandler} />
);