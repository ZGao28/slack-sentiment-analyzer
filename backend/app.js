const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const { getConversations } = require('./Conversations');
const { getSentiments } = require('./AnalyzeSentiment');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', async (req, res) => {
  const data = await fetch(`https://slack.com/api/conversations.list`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.SLACK_TOKEN,
    }
  });
  if (data.status === 200) {
    const channelData = await data.json();
    const conversations = await getConversations(channelData.channels, process.env.SLACK_TOKEN);
    const sentiments = await getSentiments(conversations);
    res.status(200).json(sentiments);
  } else {
    res.status(500).send('Something broke!')
  }
});


app.listen(8081, () => {
  console.log('App is running at http://localhost:8081');
});

