const {
    Scenes, Markup
} = require('telegraf');
const menu = {
    'uz': require('../keyboard/uz'),
    'ru': require('../keyboard/ru'),
    'eng': require('../keyboard/eng')
}

const sceneComment = new Scenes.BaseScene('sceneComment');

sceneComment.enter(async ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['comment'][0], Markup.keyboard(['⬅️']).resize());
})
sceneComment.hears('⬅️', ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0], menu[ctx.session.lang[ctx.message.chat.id]]['b1k']);
    ctx.scene.leave();
})
sceneComment.on('text', ctx => {
    let content = 
			`<b>${ctx.message.from.id}-message lang: ${ctx.session.lang[ctx.message.from.id]}  from: @${ctx.message.from.username}</b>\n`+
			`Date: ${(new Date)}\n\n`+
			`<b>message-text :</b>\n` + ctx.message.text;

        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['comment'][1]);
		ctx.telegram.sendMessage('-1001970332176',content,{parse_mode:'HTML'});
        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0],menu[ctx.session.lang[ctx.message.from.id]]['b1k']);
        ctx.scene.leave();
})

module.exports = sceneComment;