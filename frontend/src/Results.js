import React, { Component } from 'react';
import Menu from './Menu';

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
    return (
      <div>
        <Menu changeCategory={this.changeCategory}></Menu>
      </div>
    )
  }
}

export default Results;