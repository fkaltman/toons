import React from 'react';
import './App.css';
import Notes from './img/notes.png';
import { findToons } from './services/api';

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
        <img className="notes" src={Notes} alt="" />
      </div>
    );
  }
}

export default App;
