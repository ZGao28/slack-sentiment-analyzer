import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Menu from './Menu';
import Graph from './Graph';
import './Results.css'

class Results extends Component {
  constructor() {
    super();
    this.state = {
      resultsDisplayed: '',
      currentTone: '',
      toneInfo: [],
    };

    this.changeCategory = this.changeCategory.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  changeCategory(category) {
    this.setState({ resultsDisplayed: category })
  }

  showDetails(e) {
    const { name } = e;
    const toneInfo = this.props.sentenceTones.reduce((arr, st) => {
      const tone = st.tones.find(t => t.tone_name === name);
      if (tone) {
        const toneResults = {
          text: st.text,
          score: tone.score,
        }
        return [...arr, toneResults];
      }
      return arr;
    }, []);

    this.setState({ currentTone: name, toneInfo })
  }

  render() {
    const { tones, sentenceTones } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1400px' }}>
        <div className='container'>
          <Menu changeCategory={this.changeCategory}></Menu>
          <Graph tones={tones} sentenceTones={sentenceTones} showDetails={this.showDetails}></Graph>
        </div>
        <div>
          <Paper>
            <h2>Sup duck</h2>
            <h2>Sup duck</h2>
            <h2>Sup duck</h2>
            <h2>Sup duck</h2>
          </Paper>
        </div>
      </div>
    )
  }
}

export default Results;