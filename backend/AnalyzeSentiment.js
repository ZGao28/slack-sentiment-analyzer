const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const dotenv = require('dotenv').config();
const moment = require('moment');

const toneAnalyzer = new ToneAnalyzerV3({
  version: moment().format('YYYY-MM-DD'),
  iam_apikey: process.env.WATSON_KEY,
  url: process.env.WATSON_URL
});

const getSentiments = async (conversations) => {
  const workspaceToneParams = {
    tone_input: { 'text': conversations.workspace.join('. ') },
    content_type: 'application/json',
  };
  conversations.workspace.sentiment = await toneAnalyzer.tone(workspaceToneParams);
  for (channel in conversations.channels) {
    const channelToneParams = {
      tone_input: { 'text': conversations.workspace.join('. ') },
      content_type: 'application/json',
    }
    channel.sentiment = await toneAnalyzer.tone(channelToneParams);
  };
  return conversations.workspace.sentiment;
}

module.exports = {
  getSentiments,
}