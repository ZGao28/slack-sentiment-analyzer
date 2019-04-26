import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const tones = [
  'Anger',
  'Fear',
  'Joy',
  'Sadness',
  'Analytical',
  'Confident',
  'Tentative',
];

class Graph extends Component {
  render() {
    // const data = this.props.tones.map(tone => {
    //   return {
    //     name: tone.tone_name,
    //     score: tone.score,
    //   }
    // })
    const data = tones.map(tone => {
      const matchedTone = this.props.tones.find(t => (
        t.tone_name === tone
      ))
      return {
        name: tone,
        score: matchedTone ? matchedTone.score : 0,
      }
    })
    return (
      <Paper>
        <BarChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar onMouseUp={(e) => this.props.showDetails(e)} dataKey="score" fill="#2a2686" />
        </BarChart>
      </Paper>
    );
  }
}

export default Graph;
