import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import PlayerCard from './Components/playerCard';
import Search from './Components/search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}
/*
componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => {
        debugger
        return response.json();
      })
      .then(data => {
        this.setState({
          items:data,
          DataisLoaded: true
        });
      });
  }
  */
  render() {
    
    return (
      <div>
       <Search />
         
         
        
      </div>
    )
  };
}

export default App;
