import React from 'react';
import './App.css';
import Notes from './img/notes.png';
import { findZoos } from './services/api';
import Search from './components/Search';
import ZooCards from './components/ZooCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoos: []
    }
  }

  componentDidMount() {
    this.handleSearch('Jersey City');
  }
  

  handleSearch = async (location) => {
    const zoos = await findZoos(location);
    console.log(zoos);
    this.setState({ zoos });
  }

  render() {
    return (
      <div>
        <h1>Search for Zoos</h1>
        <img className="notes" src={Notes} alt="" />
        <Search handleSearch={this.handleSearch} />
        <ZooCards zoos={this.state.zoos} />
      </div>
    );
  }
}

export default App;
