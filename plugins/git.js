const Alexa = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Alexa.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/JHqKPX5/Screenshot-2021-11-26-22-39-45-1.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❤️Alex_v2💙

*bot making video* : https://youtu.be/jF8wF1KdyOw


*owner number husni* :https://wa.me/27638196983
         

*github* : https://github.com/CYBERXKID/Alex_V2.


*audio commands* :https://github.com/CYBERXKID/uploads/tree/main/bgm.

*sticker commands* :https://github.com/CYBERXKID/uploads/tree/main/stickers.
■□■□■□■□■□■□■□■□■□■□
❤️Alexa💙
▣▣ ~CYBER~ AND ~KIDD~ ▣▣

`}) 

}));
