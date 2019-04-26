import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


// const data = [
//   {
//     name: 'Anger', uv: 4000,
//   },
//   {
//     name: 'Fear', uv: 3000,
//   },
//   {
//     name: 'Joy', uv: 2000,
//   },
//   {
//     name: 'Sadness', uv: 2780,
//   },
//   {
//     name: 'Analytical', uv: 1890,
//   },
//   {
//     name: 'Confident', uv: 2390,
//   },
//   {
//     name: 'Tentative', uv: 3490,
//   },
// ];

class Graph extends Component {
  render() {
    const data = this.props.tones.map(tone => {
      return {
        name: tone.tone_name,
        score: tone.score,
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
          <Bar onMouseUp={(e) => this.props.showDetails(e)} dataKey="score" fill="#8884d8" />
        </BarChart>
      </Paper>
    );
  }
}

export default Graph;
