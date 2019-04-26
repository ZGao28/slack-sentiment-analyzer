import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';

import Menu from './Menu';
import Graph from './Graph';
import Table from './Table';
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
    this.table = React.createRef();
  }

  changeCategory(category) {
    this.setState({ resultsDisplayed: category });
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

    this.setState(
      { currentTone: name, toneInfo },
      () => this.table.current.scrollIntoView()
    );

  }

  render() {
    const { tones, sentenceTones } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1400px', marginBottom: '100px' }}>
        <div className='container'>
          <Menu changeCategory={this.changeCategory}></Menu>
          <Graph tones={tones} sentenceTones={sentenceTones} showDetails={this.showDetails}></Graph>
        </div>
        <div ref={this.table}>
          {this.state.toneInfo.length > 0 &&
            <Table toneInfo={this.state.toneInfo}></Table>
          }
        </div>
      </div>
    )
  }
}

export default Results;