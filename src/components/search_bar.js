import React, { Component } from 'react';

class SearchBar extends React.Component {
    render() {
        return <input onChange={ (event) => this.setState( { term: event.target.value}) }/>
    }
    
        constructor(props) {
        super(props);

        this.state = { term: "" };
    }
    
}

export default SearchBar;