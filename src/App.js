import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="App">
            <NavBar />
            <SearchBar onSearch={handleSearch} />
            <main className="main">
                <ImageGallery searchQuery={searchQuery} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
