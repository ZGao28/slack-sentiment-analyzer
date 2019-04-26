const Slack = require('slack');

const getConversations = async (channelList, token) => {
  // Create different categories to filter messages by
  const conversations = {
    workspace: [],
    channels: {},
    employees: {}
  };
  for (const channel of channelList) {
    const data = await Slack.conversations.history({token, channel: channel.id}); 
    conversations.channels[channel.id] = [];
    if (data.ok) {
      data.messages.forEach(message => {
        conversations.workspace.push(message.text);
        conversations.channels[channel.id].push(message.text);
        if (conversations.employees[message.user]) {
          conversations.employees[message.user].push(message.text);
        } else {
          conversations.employees[message.user] = [message.text];
        }
      });
    };
  };
  return conversations;
}

module.exports = {
  getConversations,
}