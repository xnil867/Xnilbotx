module.exports.config = {
    name: "rules",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱",
    description: "important notes",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`❐-আসসালামু আলাইকুম,🖤🌺

❐- Group এর কিছু রুলস আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানে না তারা জেনে রাখেন⬅️
<-------------------------------------------------------------------------->

১) কোন প্রকার বাঝে কথা বলা যাবে না !⚠️

২) বট সেল করা বা বট কিনা এই ধরনের কথা বলা যাবে না ! ⚠️

৩) কোন পর্ণ স্ক্রিনশট কিংবা লিংক দেওয়া  যাবে না !⚠️

৪) কাউকে অপমানিত করে গালি দেওয়া যাবে না !⚠️

৫) বট এর ফাইল চাওয়া যাবে না 🌚🥱 !⚠️

৬)বট নিয়ে কোনো স্ক্রিনশট অথবা ভিডিও দেওয়া যাবে নাহ 🫡

৭) group এ কল করা যাবে না!⚠️

৮) spam করা যাবে না! ⚠️

৯) বট নিয়ে কোন প্রকার টেক্সট করা যাবে না.. আর /help ফাইলে এ যেই গুলা  আসে এইগুলা শুধু ব্যাবাহর করবেন 🙂!

 ১০)কোন বট এড করা যাবে না.. বট নিয়ে কোন প্রকার সস ( screen short) দেওয়া বা চাওয়া যাবে না 🙃!⚠️

১১)  গ্রুপে আড্ডা দেওয়া যাবে.. কিন্তু কোন প্রকার লিংক শেয়ার করা যাবে না.. কেবল মাএ facebook /tiktok/Instagram /youtube/ এই গুলা লিংক দেওয়া যাবে ★
কোন  browser এর লিংক বা সস দেওয়া যাবে না! ⚠️

১২) গ্রুপ এ কোনো প্রকার টিউটরিয়াল ভিডিও এর স্ক্রিনশট বা লিংক দেওয়া যাবে নাহ 👈

১৩)আর  গ্রুপে কোন কিছু ইনফরমেশন পরিবর্তন করা যাবে না ..without permission! ⚠️
<-------------------------------------------------------------------------->

  　　　　　　　　　　⤵️🌺
যারা এই রুলস  গুলে মেনে চলতে পারবেন তারা group থাকেন 🌺আর যারা মানতে পারবেন না লিফট নিবেন, আর রুলস না মানলে সম্মান এর সাথে ব্যান & কিক দেওয়া হবে
                                             <-------------------------------------------------------------------------->

👉 যারা বট সম্পক  বুঝেন না, তারা এডমিন কে মেনশন দিয়ে বলবেন
<-------------------------------------------------------------------------->
              ‌
___সাথেই থাকুন 🌺SHAON [ / ] ROBOT🌼BOX🌸___

　　　　　💖...........ধন্যবাদ সবাইকে...........💖`);
   var ZiaRein = [
"https://i.imgur.com/huumLca.jpg",
"https://i.imgur.com/EcryTGh.jpg",
"https://i.imgur.com/tu12HrQ.jpg",
"https://i.imgur.com/Vx25FHG.jpg",
"https://i.imgur.com/NcbC8Pn.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
