/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "info",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "kensu",
  description: "info bot owner",
  commandCategory: "Dành cho người dùng",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
      "Đừng mong chờ gì từ MintBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MintBot là ví dụ.",
      "Mirai dropped.",
      "MintBot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "MintBot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.postimg.cc/zfz93KHh/fire-and-smoke-anonymous-k6ab5bh7l4p9bbkj.jpg",
"https://i.postimg.cc/TYSVCwk9/images.jpg",
"https://i.postimg.cc/BbnTw19h/images-1.jpg",
"https://i.postimg.cc/sD1PYSJx/images-2.jpg",
"https://i.postimg.cc/T1NV8YTT/images-3.jpg",
"https://i.postimg.cc/Kc0r3QBC/images-4.jpg",
"https://i.postimg.cc/y8ZF5Htz/images-5.jpg",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `====「 ${namebot} 」====\n» Prefix system: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n──────────────\n======「 ADMIN 」 ======\n${msg.join("\n")}\n──────────────\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length}\n──────────────\n[thanks for using bot!!]`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
  }
}/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "info",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "kensu",
  description: "🥰আসসালামু আলাইকুম 🥰",
  commandCategory: "Dành cho người dùng",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
      "Đừng mong chờ gì từ MintBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MintBot là ví dụ.",
      "Mirai dropped.",
      "MintBot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "MintBot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.postimg.cc/zfz93KHh/fire-and-smoke-anonymous-k6ab5bh7l4p9bbkj.jpg",
"https://i.postimg.cc/hPXwjbHR/received-1206340947431579.jpg",
"https://i.postimg.cc/rpkYf6zq/received-193113977021556.jpg",
"https://i.postimg.cc/qvn5cBJm/received-219143880900841.jpg",
"https://i.postimg.cc/Kcqwxsp5/received-3115259395446227.jpg",
"https://i.postimg.cc/GtHM4dgx/received-580495124172523.jpg",
"https://i.postimg.cc/sfYPJB7G/received-263964352859695.jpg",


    ];    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: 
        `🍀----আসসালামু আলাইকুম----🍀
        
┏━━•❅•°°•❈ ❈•°°°•❅•━━┓\n\n「  ${namebot}  」\n\n┗━━•❅•°°•❈❈•°°° •❅•━━┛ \n\n______________________________\n\n↓↓_𝗥𝗢𝗕𝗢𝗧 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢_↓↓\n\n» 𝗣𝗿𝗲𝗳𝗶𝘅 𝘀𝘆𝘀𝘁𝗲𝗺: ${PREFIX}\n\n» 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘅: ${prefix}\n\n» 𝗧𝗼𝘁𝗮𝗹 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: ${commands.size}\n\n» 𝗣𝗶𝗻𝗴: ${Date.now() - dateNow}ms\n______________________________\n\n         ↓↓_𝗥𝗢𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢_↓↓\n\n 
𝗡𝗔𝗠𝗘 :>𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱

𝗢𝘄𝗻𝗲𝗿 𝗜𝗱 𝗹𝗶𝗻𝗸:☞https://www.facebook.com/Hey.Its.Me.Shaon.Ahmed

𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽☞018......বাকীটা পরে দিমু 

______________________________\n\n----↓↓𝙍𝙤𝙗𝙤𝙩 𝙖𝙘𝙩𝙞𝙫𝙚 𝙩𝙞𝙢𝙚↓↓----\n\n          ${hours} : ${minutes} : ${seconds} second(s)\n\n______________________________\n» 𝗧𝗢𝗧𝗔𝗟 𝗨𝗦𝗘𝗥𝗦: ${global.data.allUserID.length} \n\n» 𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣: ${global.data.allThreadID.length}\n______________________________\n\n আপনার জন্য রইলো ১কেজি পিউর \n              🌹ভালোবাসা🌹
\n--------------------------------------------------\n\n🌹🌹🌹🍀🍀🍀🍀🌹🌹🌹`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
  }
  }