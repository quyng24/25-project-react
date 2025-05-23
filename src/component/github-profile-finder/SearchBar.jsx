import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';


const SearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
        onSearch(username.trim());
        setUsername('');
    }
    };

    return (
    <form className="search-form" onSubmit={handleSubmit}>
    <input
        type="text"
        className="search-input"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <button type="submit" className="search-button">Search</button>
    </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar; 