const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const dotenv = require('dotenv').config();
const moment = require('moment');

const toneAnalyzer = new ToneAnalyzerV3({
  version: moment().format('YYYY-MM-DD'),
  iam_apikey: process.env.WATSON_KEY,
  url: process.env.WATSON_URL
});

const getSentiments = async (conversations) => {
  const toneParams = {
    tone_input: { 'text': conversations.workspace.join('. ') },
    content_type: 'application/json',
  };
  
  const workspaceAnalysis = await toneAnalyzer.tone(toneParams);
  return workspaceAnalysis;
}

module.exports = {
  getSentiments,
}