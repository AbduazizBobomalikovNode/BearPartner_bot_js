const {
	Scenes,Markup
}  = require('telegraf');
const menu = { 
    'uz':require('../keyboard/uz'),
    'ru':require('../keyboard/ru'),
    'eng':require('../keyboard/eng')
}

const scenesLang = new Scenes.BaseScene('sceneLang');

scenesLang.enter(async ctx=>{
       	ctx.reply('Tilni tanlang || Выберите язык || Select a language',{
			parse_mode:'HTML',
			...Markup.inlineKeyboard([
				Markup.button.callback('🇺🇿O\'zbek','uz'),
				Markup.button.callback('🇷🇺Русский','ru'),
				Markup.button.callback('🇦🇮English','eng')])
		})
	})

scenesLang.action(['uz','ru','eng'],async (ctx)=>{
	ctx.session.lang[ctx.callbackQuery.from.id] = ctx.callbackQuery.data;
    ctx.telegram.deleteMessage(ctx.chat.id,ctx.update.callback_query.message.message_id);
	ctx.reply("Til belgilandi || Язык установлен || The language is set");
    ctx.reply(menu[ctx.session.lang[ctx.callbackQuery.from.id]]['home'][0],menu[ctx.session.lang[ctx.callbackQuery.from.id]]['b1k']);
	ctx.scene.leave()
})

module.exports = scenesLang;