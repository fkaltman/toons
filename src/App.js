import React from 'react';
import './App.css';
import Notes from './img/notes.png';
import { findToons } from './services/api';
import Search from './components/Search';
import VenueCards from './components/VenueCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    this.handleSearch('Jersey City');
  }
  

  handleSearch = async (location) => {
    const venues = await findToons(location);
    console.log(venues);
    this.setState({ venues });
  }

  render() {
    return (
      <div>
        <h1>Search for toons</h1>
        <img className="notes" src={Notes} alt="" />
        <Search handleSearch={this.handleSearch} />
        <VenueCards venues={this.state.venues} />
      </div>
    );
  }
}

export default App;
