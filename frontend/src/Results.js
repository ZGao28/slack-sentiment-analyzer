import React, { Component } from 'react';
import Menu from './Menu';
import Graph from './Graph';
import './Results.css'

class Results extends Component {
  constructor() {
    super();
    this.state = {
      resultsDisplayed: ''
    };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(category) {
    this.setState({ resultsDisplayed: category })
  }

  render() {
    const { tones, sentenceTones } = this.props;
    return (
      <div className='container'>
        <Menu changeCategory={this.changeCategory}></Menu>
        <Graph tones={tones} sentenceTones={sentenceTones}></Graph>
      </div>
    )
  }
}

export default Results;