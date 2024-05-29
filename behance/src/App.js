import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SearchBar />
            <Footer/>
            <main className="main">
                <div >
                </div>
            </main>
        </div>
        
    );
}

export default App;

      