import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const slackUrl = 'https://ca.desknibbles.com/products.json?limit=250'
    const resp = await fetch(slackUrl)
    this.setState({ data: await resp.json() })
  }

  render() {
    return (
      <div className="App">
        <h1>Sup</h1>
      </div>
    );
  }
}

export default App;
