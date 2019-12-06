import React from 'react';
import Axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({player: res.data});
      console.log(this.state.player);
    })
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

export default App;