import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from "./components/search_bar";
import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyBqiPN9f0LoYUfEFf8DxwMhb2sF-ad_3-I';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
