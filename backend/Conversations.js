const Slack = require('slack');

const getConversations = async (channelList, token) => {
  await Promise.all(channelList.map(async channel => {
    const data = await Slack.conversations.history({token, channel: channel.id});
    console.log(data);
    if (data.status === 200) {
      const conversationHistory = await data.json();
      console.log(conversationHistory);
      return channel;
    } else {
      console.log(data);
      return {
        id: channel.id,
        error: 'could not get channel history',
      }
    }
  }));
  return channelList;
}

module.exports = {
  getConversations,
}