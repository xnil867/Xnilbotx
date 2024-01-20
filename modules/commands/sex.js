/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "sex",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Shaon Ahmed",
  description: "ISLAMIC VEDIO",
  commandCategory: "admin",
  usages: "sad vedio",
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
   var hi = ["Sex video // A P I  S H A O N 🌺"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=1DPE3Oo2QSzEVKbgE5CbnJGAX16IMcG2C",
    "https://drive.google.com/uc?id=1DJPcWco6WFnfLTwa28XZMdhcDEKzYukQ",
    "https://drive.google.com/uc?id=1DZ_1wRItCK8B9wT6TQ1NlH3-V4ul1x8q",
    "https://drive.google.com/uc?id=1DJZ0jnaRPS2Pq3D_b-xFjMWlfdxQW80a",
    "https://drive.google.com/uc?id=1EDdiUaFAFAX9Sy6qoizrcd6h3S6M-H1W",
    "https://drive.google.com/uc?id=1D9l-zGTB2ZCnhGYnOR1Y1GygnFO12KOx",
    "https://drive.google.com/uc?id=1Dkki3NB-bErOo41u6mMAesUNyzaK-xcV",
    "https://drive.google.com/uc?id=1DnMnX5Y4-PLDT5c9v8qko6TANFLmiBfj",
    "https://drive.google.com/uc?id=1DT_e5vknWWH2c0QB8rdHtLRHaI1voJKk",
    "https://drive.google.com/uc?id=1DTXWUsYbEqFB0pwdBndsJVbTDNRpYLRh",
    "https://drive.google.com/uc?id=1CdSQFpqdHGb-mLY7B11QE_mzSEsLk6ct",
    "https://drive.google.com/uc?id=1CiuNzx5ySZJcByVkhmYePfD4SGiPXANo",
    "https://drive.google.com/uc?id=1CnAIypeceTDi7bdubCMG76FI2DiMTZgC",
    "https://drive.google.com/uc?id=1DNoZ7XIKUnwJkXU7Ce4Dp2R3wdNgNiui",
    "https://drive.google.com/uc?id=1CalzQLKWvhKvQXp4T0T2GL3CEG97U4AS",
    "https://drive.google.com/uc?id=1CaVat1YKppKsEVF6E3bVEYZh08IJRt5U",
    "https://drive.google.com/uc?id=1DLB0qSrZlvmfYnM1COaMU83qDfwCCtmF",
    "https://drive.google.com/uc?id=1CiIemCjTcxcHG9R6bJrIKCZgNq34MaGj",
    "https://drive.google.com/uc?id=1Dhv1cEKsRxAGk1lYhxpZp-yR9DUx8zVY",
    "https://drive.google.com/uc?id=1Cj4cA5lxffQtpF9TBGhwaNosGwyUrNEW",
    "https://drive.google.com/uc?id=1CW_q--IAd_H9OrFvl3G5Qqa5vrZbTTCx",
    "https://drive.google.com/uc?id=1ELthYZYuPm76rO3qGfordD-5C9V7FdQF",
    "https://drive.google.com/uc?id=1ECpc89QFu-meH2AvfCLsQpi6awmQjUfx",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };