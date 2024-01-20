module.exports.config = {
  name: "prefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱",
  description: "See the bot prefix",
  commandCategory: "For admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱") { return api.sendMessage(`Changed credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`️️️️️️️️️️️️️️️️️️️️️️️️️হ্যাঁ মালিক💖এইটা আমার উপসর্গ ঠিক আছে✅ ⇉ [ ${prefix} ]`)
      }
      else return out(`️️️️️️️️️️️️️️️️️️️️️️️️️হ্যাঁ মালিক💖এইটা আমার উপসর্গ ঠিক আছে✅ ⇉ 👉🏻  `    + data.PREFIX )
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage(`️️️️️️️️️️️️️️️️️️️️️️️️️This is my prefix⇉ [ ${global.config.PREFIX} ]`, event.threadID)
  }