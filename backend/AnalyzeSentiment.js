const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const dotenv = require('dotenv').config();
const moment = require('moment');

const toneAnalyzer = new ToneAnalyzerV3({
  version: moment().format('YYYY-MM-DD'),
  iam_apikey: process.env.WATSON_KEY,
  url: process.env.WATSON_URL
});

const getSentiments = async (conversations) => {
  const workspaceAnalysis = await toneAnalyzer.tone(conversations.workspace.join('. '));
  return workspaceAnalysis;
}

module.exports = {
  getSentiments,
}