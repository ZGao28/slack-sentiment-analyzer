import React, { Component } from 'react';
import './App.css';
import Results from './Results'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slackUrl: '',
      analysing: false,
      tones: null,
      sentenceTones: null,
    };

    this.getSentimentResults = this.getSentimentResults.bind(this);
  }

  async getSentimentResults() {
    // use slack url to get results
    // insert request to backend with slack url


    this.setState({ analysing: true })

    // simulate getting results
    setTimeout(() => this.setState({
      analysing: false,
      tones: [
        {
          "score": 0.647322,
          "tone_id": "anger",
          "tone_name": "Anger"
        },
        {
          "score": 0.565706,
          "tone_id": "fear",
          "tone_name": "Fear"
        },
        {
          "score": 0.724923,
          "tone_id": "confident",
          "tone_name": "Confident"
        }
      ],
      sentenceTones: [
        {
          "sentence_id": 0,
          "text": "I hate these new features On #ThisPhone after the update.",
          "tones": [
            {
              "score": 0.637279,
              "tone_id": "anger",
              "tone_name": "Anger"
            }
          ]
        },
        {
          "sentence_id": 1,
          "text": "I hate #ThisPhoneCompany products, you'd have to torture me to get me to use #ThisPhone.",
          "tones": [
            {
              "score": 0.591225,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.560098,
              "tone_id": "analytical",
              "tone_name": "Analytical"
            },
            {
              "score": 0.645985,
              "tone_id": "confident",
              "tone_name": "Confident"
            }
          ]
        },
        {
          "sentence_id": 2,
          "text": "The emojis in #ThisPhone are stupid.",
          "tones": [
            {
              "score": 0.760538,
              "tone_id": "anger",
              "tone_name": "Anger"
            }
          ]
        },
        {
          "sentence_id": 3,
          "text": "#ThisPhone is a useless, stupid waste of money.",
          "tones": [
            {
              "score": 0.810585,
              "tone_id": "anger",
              "tone_name": "Anger"
            }
          ]
        },
        {
          "sentence_id": 4,
          "text": "#ThisPhone is the worst phone I've ever had - ever 😠.",
          "tones": [
            {
              "score": 0.517921,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.874372,
              "tone_id": "confident",
              "tone_name": "Confident"
            }
          ]
        },
        {
          "sentence_id": 5,
          "text": "#ThisPhone another ripoff, lost all respect SHAME.",
          "tones": [
            {
              "score": 0.92125,
              "tone_id": "confident",
              "tone_name": "Confident"
            }
          ]
        },
        {
          "sentence_id": 6,
          "text": "I'm worried my #ThisPhone is going to overheat like my brother's did.",
          "tones": [
            {
              "score": 0.749632,
              "tone_id": "fear",
              "tone_name": "Fear"
            }
          ]
        },
        {
          "sentence_id": 7,
          "text": "#ThisPhoneCompany really let me down... my new phone won't even turn on.",
          "tones": [
            {
              "score": 0.672469,
              "tone_id": "analytical",
              "tone_name": "Analytical"
            },
            {
              "score": 0.75152,
              "tone_id": "tentative",
              "tone_name": "Tentative"
            }
          ]
        }
      ]
    }), 500)
  }

  render() {
    const { slackUrl, analysing, tones, sentenceTones } = this.state;
    return (
      <div className="App">
        <h1>Duck?</h1>
        <input
          placeholder='insert slack url here'
          value={slackUrl}
          onChange={(e) => this.setState({ slackUrl: e.target.value })}
        />
        <button onClick={() => this.getSentimentResults()}>Check Hoppiness</button>
        {analysing && <h2>Loading...</h2>}
        {tones && <Results tones={tones} sentenceTones={sentenceTones} />}
      </div>
    );
  }
}

export default App;
