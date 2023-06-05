const {
    Scenes, Markup
} = require('telegraf');
let quiz = 0;
const menu = {
    'uz': require('../keyboard/uz'),
    'ru': require('../keyboard/ru'),
    'eng': require('../keyboard/eng')
}

const sceneFile = new Scenes.BaseScene('sceneFile');

sceneFile.enter(async ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['file'][0], Markup.keyboard(['⬅️']).resize());
})
sceneFile.hears('⬅️', ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0], menu[ctx.session.lang[ctx.message.chat.id]]['b1k']);
    ctx.scene.leave();
})
sceneFile.on('document',ctx=>{
    let user = `from: ${ctx.message.chat.last_name?ctx.message.chat.last_name:''} ${ctx.message.chat.first_name}\nusername: @${ctx.message.chat.username?ctx.message.chat.username:''}`
    let size = parseInt(ctx.message.document.file_size/1024);
    let format = ctx.message.document.file_name.split('.');
    user = user + `\nDate: ${new Date()}`;

    if (!(size>10 && size<1024*1024*20)) {
        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['file'][1]);
    }else if(format[format.length-1] != 'doc' && format[format.length-1] != 'pdf' && format[format.length-1] != 'docx'){
        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['file'][2]);
    }else{
        ctx.telegram.copyMessage('-1001778542466',ctx.message.from.id,ctx.update.message.message_id,{
            parse_mode:'HTML',
            caption: user
        })
        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['file'][3]);
        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0],menu[ctx.session.lang[ctx.message.from.id]]['b1k']);
        ctx.scene.leave();
    }
    
})

module.exports = sceneFile;