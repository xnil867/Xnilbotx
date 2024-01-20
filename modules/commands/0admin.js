module.exports.config = {
	name: "admin2",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Manage bot admin",
	commandCategory: "admin",
	usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "bn": {
        "listAdmin": '[Admin] Danh sách toàn bộ người điều hành bot: \n\n%1',
        "notHavePermssion": '[Admin] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '[Admin] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": '[Admin] Đã gỡ bỏ %1 người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
        case "list":
        case "all":
        case "-a": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`- ${name}(https://facebook.com/${idAdmin})`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }

        case "add": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}

module.exports.config = {
	name: "admin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱",
	description: "Bot operator information",
	commandCategory: "admin",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`,◢◥▂▂▂▂⭕▂▂▂▂◤◣
  ☠️ ☞︎︎︎𝐃𝐎 𝐍𝐎𝐓 𝐓𝐑𝐔𝐒𝐓 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑☜︎︎︎ ☠️
◥◢▔▔▔▔⭕▔▔▔▔◣◤    
 নাম            :𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱(✷‿✷)
ধর্ম              :𝐈𝐬𝐥𝐚𝐦😘
বাড়ি            :𝐇𝐚𝐛𝐚𝐬𝐡𝐩𝐮𝐫🖤
পেশা            :𝐇𝐚𝐜𝐤𝐞𝐫🎭
বয়স            :19+🙆
উচ্চতা           : 5:5🧍
ওজন           : 𝐁𝐨𝐥𝐛𝐨 𝐧𝐚 𝐬𝐨𝐫𝐨𝐦 𝐤𝐨𝐫𝐚🙈
রক্ত             :𝐀+🩸
গায়ের রং        : 𝐊𝐚𝐥𝐚🌚
বেয়াদবি         : 𝐊𝐨𝐫𝐞 𝐚𝐤𝐭𝐮 𝐚𝐤𝐭𝐮😁
ধন সম্পদ       : 𝐍𝐚𝐢🥹
ভালোবাসা       : 𝐀𝐦𝐦𝐮 𝐀𝐛𝐛𝐮🥰
রিলেশন         : এইসব প্রেম ট্রেম আমি করি না😎
𝐛𝐨𝐬𝐬 𝐚𝐫 𝐟𝐛 𝐥𝐢𝐧𝐤  : https://www.facebook.com/Hey.Its.Me.Shaon.Ahmed
 যে আমার সাথে ভালো ব্যবহার করে আমি তার সাথে ভালো ব্যবহার করি`, event.threadID, event.messageID);