/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽সুন্দর চেহারা নয় ﷽🥰\n 🖤﷽ সুন্দর মন খুজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "___ নারী তুমি নিজেকে এমন ভাবে তৈরি করো.!\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n ------যাতে যেকোন পুরুষ তোমাকে পেয়ে..!🖤\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n---বার বার রবের কাছে শুকরিয়া আদায় করে!🌺🌺︵❂✿༎༅⸙͎⸙͎\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n#আলহামদুলিল্লাহ 🥰🌺🖤𝄞⋆⃝𝄞⋆⃝༅༎༅❍",
             "- ইসলাম অহংকার করতে শেখায় না!🌸\n\n- ইসলাম শুকরিয়া আদায় করতে শেখায়!🤲🕋🥀",
             "❥︎-----★ ভাগ্য !! কাকে !! বলে !! জানেন  !! 🖤🌻 \n🦋  পৃথিবীতে !! 4200 !! হাজার !! ধর্ম !! আছে  !!🥰\n❥︎-----★ তার !! মধ‍‍্যে !! আমি !! এবং !! আপনি !! মুসলিম  !! 💚🌻\n★-----🦋  আলহামদুলিল্লাহ্  🦋-----★",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰",
             "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে নেশায় নয় আল্লাহর ইবাদতে-||-🖤🌸✨\n•___🍒🖇️✨___•",
             "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀 ",
             "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎কবরস্থান༎_♡❤\n🦋🥀࿐",
             "•\n\nপ্রসঙ্গ যখন ধর্ম নিয়ে•🥰😊\nতখন আমাদের ইসলামই সেরা•❤️\n𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥i𝐥𝐥𝐚🌸❤️",
             "❥︎-----★ ভাগ্য !! কাকে !! বলে !! জানেন  !! 🖤🌻 \n🦋  পৃথিবীতে !! 4200 !! হাজার !! ধর্ম !! আছে  !!🥰\n❥︎-----★ তার !! মধ‍‍্যে !! আমি !! এবং !! আপনি !! মুসলিম  !! 💚🌻\n★-----🦋  আলহামদুলিল্লাহ্  🦋-----★",
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/7LdGnyjQ/images-31.jpg",
  "https://i.postimg.cc/65c81ZDZ/images-30.jpg",
"https://i.postimg.cc/Y0wvTzr6/images-29.jpg",
"https://i.postimg.cc/1Rpnw2BJ/images-28.jpg",
"https://i.postimg.cc/mgrPxDs5/images-27.jpg",
"https://i.postimg.cc/yxXDK3xw/images-26.jpg",
"https://i.postimg.cc/kXqVcsh9/muslim-boy-having-worship-praying-fasting-eid-islamic-culture-mosque-73899-1334.webp",
"https://i.postimg.cc/hGzhj5h8/muslims-reading-from-quran-53876-20958.webp",
"https://i.postimg.cc/x1Fc92jT/blue-mosque-istanbul-1157-8841.webp",
"https://i.postimg.cc/j5y56nHL/muhammad-ali-pasha-cairo-219717-5352.webp",
"https://i.postimg.cc/dVWyHfhr/images-1-21.jpg",
"https://i.postimg.cc/q7MGgn3X/images-1-22.jpg",
"https://i.postimg.cc/sX5CXtSh/images-1-16.jpg",
"https://i.postimg.cc/66Rp2Pwz/images-1-17.jpg",
"https://i.postimg.cc/Qtzh9pY2/images-1-18.jpg",
"https://i.postimg.cc/MGrhdz0R/images-1-19.jpg",
"https://i.postimg.cc/LsMSj9Ts/images-1-20.jpg",
"https://i.postimg.cc/KzNXyttX/images-1-13.jpg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };