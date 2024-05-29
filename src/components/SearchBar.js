import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Dropdown from './Dropdown';
import './SearchBar.css';



const suggestionsList = [
    { name: 'packaging' },
    { name: 'ui' },
    { name: 'twitch overlay' },
    { name: 'app' },
    { name: 'illustration'},
    { name: 'landscape'},
    { name: 'portrait'},
    { name: 'studio'},
    { name: 'design' },
    { name: 'photography' },
    { name: 'Art' },
    
];

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : suggestionsList.filter(suggestion =>
        suggestion.name.toLowerCase().includes(inputValue)
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const onChange = (event, { newValue }) => {
        setValue(newValue);
        onSearch(newValue); 
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const filterOptions = [
        'Projects',
        'Assets',
        'Images',
        'People'
    ];

    const sortOptions = [
        'Recommended',
        'Curated',
        'Most Appreciated',
        'Most Viewed',
        'Most Discussed',
        'Most Recent'
    ];

    const inputProps = {
        placeholder: 'Search the creative world at work',
        value,
        onChange
        
    };

    return (
        <div className="search-bar">
            <Dropdown label="Filter" options={filterOptions} />
            
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
            <Dropdown label="Recommended" options={sortOptions} />
        </div>
    );
};

export default SearchBar;
