const API = "https://logo2.hackbot12.repl.co/api/textpro?number=50&text=";
module.exports.config = {
  name: "logo51", 
  version: "13.1.9", 
  hasPermssion: 0, 
  credits: "\u269e\ud835\udde6\ud835\udddb\ud835\uddd4\ud835\udde2\ud835\udde1\u279b\ud835\udde3\ud835\uddff\ud835\uddfc\ud835\uddf7\ud835\uddf2\ud835\uddf0\ud835\ude01\u269f", 
  description: "Logo-Name Your Name", 
  commandCategory: "SHAON-PROJECT", 
  usages: "/logoname Shaon", 
  cooldowns: 10};

module.exports.run = async function ({api, event, args}) {
  if (this.config.credits != "\u269e\ud835\udde6\ud835\udddb\ud835\uddd4\ud835\udde2\ud835\udde1\u279b\ud835\udde3\ud835\uddff\ud835\uddfc\ud835\uddf7\ud835\uddf2\ud835\uddf0\ud835\ude01\u269f") {
    console.log("\x5b\x20\x57\x41\x52\x4e\x49\x4e\x47\x20\x5d\x20\xbb\x20\x43\x48\x41\x4e\x47\x45\x49\x4e\x47\x20\x45\x56\x45\x52\x59\x54\x48\x49\x4e\x47\x20\x49\x53\x20\x4e\x4f\x54\x20\x47\x4f\x4f\x44\x20\x55\x4e\x54\x49\x4c\x20\x48\x41\x56\x45\x20\x41\x20\x47\x4f\x4f\x44\x20\x4b\x4e\x4f\x57\x4c\x45\x44\x47\x45\x20\x3a\x70\x20\x4d\x54\x58\x2d\x50\x52\x4f\x4a\x45\x43\x54\x20\x3a\x29\x20" + global.config.BOTNAME + ' \x63\x72\x65\x64\x69\x74\x73\x20\x6d\x6f\x64\x75\x6c\x65\x73 "' + this.config.name + '"');
    return api.sendMessage("\xd7\x20\x5b\x20\x57\x41\x52\x4e\x49\x4e\x47\x20\x5d\x20\xd7\x20\x48\x41\x48\x41\x2c\x20\x45\x56\x45\x52\x59\x54\x48\x49\x4e\x47\x20\x49\x53\x20\x4e\x4f\x54\x20\x59\x4f\x55\x52\x53\x20\x50\x52\x4f\x50\x45\x52\x54\x59\x20\ud83d\ude39\ud83d\udd90\ud83c\udffb", event.threadID, event.messageID);
  }
  ;
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");
  mrtom = args.join(" ");
  event.type == "message_reply" ? mrtom = event.messageReply.attachments[0].url : mrtom = args.join(" ");
  const pathsave = __dirname + `${"/cache/banner.png"}`;
  let imageBuffer;
  api.sendMessage("\u275d\u272e\x77\u0489\xa0\x61\u0489\xa0\x69\u0489\xa0\x74\u0489\xa0\x20\x46\u0489\xa0\x6f\u0489\xa0\x72\u0489\x20\x20\u277a\x53\u0489\xa0\x65\u0489\xa0\x63\u0489\xa0\x20\u272e\u275e", event.threadID, event.messageID);
  axios.get(`${""}${API}${""}${encodeURI(mrtom)}${""}`, {responseType: "arraybuffer"}).then(data => {
    const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: "\u275d\u272e\u269e\ud835\udde6\ud835\udddb\ud835\uddd4\ud835\udde2\ud835\udde1\u279b\ud835\udde3\ud835\udde5\ud835\udde2\ud835\udddd\ud835\uddd8\ud835\uddd6\ud835\udde7\u269f                         \ud835\uddd4\ud835\udddc \ud835\udde7\ud835\udde0\ud835\udde5 \ud835\udddf\ud835\udde2\ud835\uddda\ud835\udde2 \u272e\u275e", attachment: fs.createReadStream(pathsave)}, event.threadID, () => {
      return fs.unlinkSync(pathsave);
    }, event.messageID);
  }).catch(error => {
    let err;
    if (error.response) {
      err = JSON.parse(error.response.data.toString());
    } else {
      err = error;
    }
    ;
    return api.sendMessage(`${"\x45\x72\x72\x6f\x72\x21\x20\x41\x6e\x20\x65\x72\x72\x6f\x72\x20\x6f\x63\x63\x75\x72\x72\x65\x64\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x6c\x61\x74\x65\x72\x20"}${err.error}${" "}${err.message}${""}`, event.threadID, event.messageID);
  });
};
            