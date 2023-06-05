const {
    Scenes, Markup
} = require('telegraf');
let quiz = 0;
const menu = {
    'uz': require('../keyboard/uz'),
    'ru': require('../keyboard/ru'),
    'eng': require('../keyboard/eng')
}

const sceneAccount = new Scenes.BaseScene('sceneAccount');

sceneAccount.enter(async ctx => {
    quiz = 4;
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['update'][0], Markup.keyboard(['⬅️']).resize());
})
sceneAccount.hears('⬅️', ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0], menu[ctx.session.lang[ctx.message.chat.id]]['b1k']);
    ctx.scene.leave();
})
sceneAccount.on('text', ctx => {
    switch (quiz) {
        case 4: {
            ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['update'][1]);
            ctx.session.updatePartner[ctx.message.from.id].fullName = ctx.message.text;
            quiz = 3;
        } break;
        case 3: {
            const keyboard = Markup.keyboard([
                Markup.button.contactRequest(menu[ctx.session.lang[ctx.message.chat.id]]['update'][2]),
                Markup.button.text('⬅️')
            ]).resize();
            ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['update'][3], keyboard)
            ctx.session.updatePartner[ctx.message.from.id].email = ctx.message.text;
            quiz = 2;
        } break;
        case 1: {
            ctx.session.updatePartner[ctx.message.from.id].payNumber = ctx.message.text;
            const message =
`
${menu[ctx.session.lang[ctx.message.chat.id]]['update'][8]}${ctx.session.updatePartner[ctx.message.from.id].fullName}
${menu[ctx.session.lang[ctx.message.chat.id]]['update'][9]}${ctx.session.updatePartner[ctx.message.from.id].email}
${menu[ctx.session.lang[ctx.message.chat.id]]['update'][10]}${ctx.session.updatePartner[ctx.message.from.id].contact.phone_number}
${menu[ctx.session.lang[ctx.message.chat.id]]['update'][11]}${ctx.session.updatePartner[ctx.message.from.id].payNumber}
`
            ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['update'][4] + message, {
                parse_mode: 'HTML',
                ...Markup.inlineKeyboard([
                    Markup.button.callback(menu[ctx.session.lang[ctx.message.chat.id]]['update'][5], '✅'),
                    Markup.button.callback(menu[ctx.session.lang[ctx.message.chat.id]]['update'][6], '❌')
                ])
            });
            quiz = 0;
        } break;
        default:
            console.log(ctx.session.updatePartner[ctx.message.from.id]);
            break;
    }
})
sceneAccount.on('contact', ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['update'][7], Markup.keyboard(['⬅️']).resize());
    ctx.session.updatePartner[ctx.message.from.id].contact = ctx.message.contact;
    quiz = 1;
})
sceneAccount.action(['✅', '❌'], async (ctx) => {//-1001778542466
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.update.callback_query.message.message_id);
    if (ctx.callbackQuery.data == '✅') {
        const message =
`
for the company: ${ctx.session.updatePartner[ctx.callbackQuery.from.id].company}
Ism va Famili:  ${ctx.session.updatePartner[ctx.callbackQuery.from.id].fullName}
Elektron pochta:  ${ctx.session.updatePartner[ctx.callbackQuery.from.id].email}
Telefon raqam:  ${ctx.session.updatePartner[ctx.callbackQuery.from.id].contact.phone_number}
Bank hisobi va Bank nomi:  ${ctx.session.updatePartner[ctx.callbackQuery.from.id].payNumber}
Date: ${(new Date)}
`
        ctx.telegram.sendMessage('-1001778542466',message,{parse_mode:'HTML'});
        console.log(ctx.session.updatePartner[ctx.callbackQuery.from.id]);
        ctx.session.updatePartner[ctx.callbackQuery.from.id] = {};
        ctx.reply(menu[ctx.session.lang[ctx.callbackQuery.from.id]]['home'][0],menu[ctx.session.lang[ctx.callbackQuery.from.id]]['b1k']);
        ctx.scene.leave()
    }
    if (ctx.callbackQuery.data == '❌') {
        ctx.session.updatePartner[ctx.callbackQuery.from.id] = {};
        quiz = 4;
        ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['update'][0], Markup.keyboard(['⬅️']).resize());
    }
})

module.exports = sceneAccount;