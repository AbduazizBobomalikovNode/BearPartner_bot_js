const { Telegraf, Scenes, session } = require("telegraf");
const fs = require('fs');
const menu = {
    'uz': require('./keyboard/uz'),
    'ru': require('./keyboard/ru'),
    'eng': require('./keyboard/eng')
}

const BOT_TOKEN = "YOUR_BOT_TOKEN";

const bot = new Telegraf(BOT_TOKEN);

const scenesLang = require('./room/lang');
const sceneAccount = require('./room/update');
const sceneComment = require('./room/comment');
const sceneFile = require('./room/file');

const stage = new Scenes.Stage([scenesLang, sceneAccount, sceneComment,sceneFile]);

bot.use((ctx, next) => { ctx.session = ctx.session ? ctx.session : {}; return next(); })
bot.use(Telegraf.log())
bot.use(session());
bot.use(stage.middleware());
bot.use((ctx, next) => {
    ctx.session.lang = ctx.session.lang ? ctx.session.lang : [];
    ctx.session.updatePartner = ctx.session.updatePartner ? ctx.session.updatePartner : [];
    try {
        if (!ctx.session.lang[ctx.message.chat.id] && ctx.message.chat.type != 'supergroup' && ctx.message.chat.type != 'group') {
            ctx.scene.enter('sceneLang');
            console.log(ctx.session.lang);
        } else {
            return next();
        }
    } catch (error) {
        console.log("xatolik", error);
    }
})

bot.start(ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0], menu[ctx.session.lang[ctx.message.chat.id]]['b1k']);
})
bot.hears('⬅️', ctx => {
    ctx.reply(menu[ctx.session.lang[ctx.message.chat.id]]['home'][0], menu[ctx.session.lang[ctx.message.chat.id]]['b1k']);
})
bot.on('text', ctx => {
    if (ctx.message.chat.type != 'supergroup' && ctx.message.chat.type != 'group') {
        switch (ctx.message.text) {
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1t'][0]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.1k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1t'][1]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.2k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1t'][2]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.3k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1t'][3]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.4k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1t'][4]: {
                ctx.scene.enter('sceneFile');
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1t'][5]: {
                ctx.scene.enter('sceneLang');
            } break;

            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.1t'][0]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Polsha-haydovchilik-guvohnomasini-olish-tartibi-05-20">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.1t'][1]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Texasmotr-06-05">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.1t'][2]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Taxi-lakneyka-va-Lampa-06-05">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.1t'][3]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Karta-Pobytu-06-05">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.1t'][4]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Sogliq-uchun-sugurta-06-05">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.1t'][5]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Aeraportdan-kutib-olish-xizmati-06-05">Bosing || Нажмите || Click</a>`);
            } break;


            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2t'][0]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.1k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2t'][1]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.2k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2t'][2]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.3k']);
            } break;


            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3t'][0]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.1k']);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3t'][1]: {
                ctx.replyWithPhoto({source: fs.createReadStream('./files/bolt-food.jpg')}).catch(err =>{
                                  console.error(`bloklanish yoki boshqa xatolik : ${err}`)
                     });
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3t'][2]: {
                ctx.reply(ctx.message.text, menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.3k']);
            } break;




            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.4t'][0]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Sugurta-06-05">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.4t'][1]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Identyfikator-va-Taxi-License-olish-uchun-yordam-05-20">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.4t'][2]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Sport-zallariga-chegirmalar-05-20">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.4t'][3]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Bepul-Sartaroshlik-Xizmati-05-20">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.4t'][4]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Ijtimoiy-tarmoqlarimizdagi-eng-faol-ishtirokchi-uchun-pul-mokofoti-05-20">Bosing || Нажмите || Click</a>`);
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.4t'][5]: {
                ctx.replyWithHTML(`<a href="https://telegra.ph/Eng-kop-pul-ishlab-topgan-insonga-mukofot-05-20">Bosing || Нажмите || Click</a>`);
            } break;

            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.1t'][0]: {
                ctx.replyWithDocument(
                    {
                        source: `./files/new-UBER.docx`
                    }, {
                    caption: menu[ctx.session.lang[ctx.message.chat.id]]['new'],
                    parse_mode: 'HTML'
                })
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.1t'][1]: {
                ctx.session.updatePartner[ctx.message.from.id] = {
                    company:'UBER'
                };
                ctx.scene.enter('sceneAccount');
            } break;


            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.2t'][0]: {
                ctx.replyWithDocument(
                    {
                        source: `./files/new-BOLT.docx`
                    }, {
                    caption: menu[ctx.session.lang[ctx.message.chat.id]]['new'],
                    parse_mode: 'HTML'
                })
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.3t'][0]: {
                ctx.replyWithDocument(
                    {
                        source: `./files/new-FREENOW.docx`
                    }, {
                    caption: menu[ctx.session.lang[ctx.message.chat.id]]['new'],
                    parse_mode: 'HTML'
                })
            } break;


            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.1t'][0]: {
                ctx.replyWithDocument(
                    {
                        source: `./files/new-UBER EATS.docx`
                    }, {
                    caption: menu[ctx.session.lang[ctx.message.chat.id]]['new'],
                    parse_mode: 'HTML'
                })
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.1t'][1]: {
                ctx.session.updatePartner[ctx.message.from.id] = {
                    company:'UBER EATS'
                };
                ctx.scene.enter('sceneAccount');
            } break;

            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.2t'][0]: {
                ctx.replyWithDocument(
                    {
                        source: `./files/new-BOLT FOOD.docx`
                    }, {
                    caption: menu[ctx.session.lang[ctx.message.chat.id]]['new'],
                    parse_mode: 'HTML'
                })
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.2t'][1]: {
                ctx.session.updatePartner[ctx.message.from.id] = {
                    company:'BOLT FOOD'
                };
                ctx.scene.enter('sceneAccount');
            } break;

            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.3t'][0]: {
                ctx.replyWithDocument(
                    {
                        source: `./files/new-GLOVO.docx`
                    }, {
                    caption: menu[ctx.session.lang[ctx.message.chat.id]]['new'],
                    parse_mode: 'HTML'
                })
            } break;
            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.3.3t'][1]: {
                ctx.session.updatePartner[ctx.message.from.id] = {
                    company:'GLOVO'
                };
                ctx.scene.enter('sceneAccount');
            } break;


            case menu[ctx.session.lang[ctx.message.chat.id]]['b1.2.1t'][2]: {
                ctx.scene.enter('sceneComment');
            } break;
            default:
                console.log("no command");
                break;
        }
    }

    if (ctx.message.reply_to_message && ctx.message.chat.id == '-1001970332176' && ctx.message.reply_to_message.from.is_bot) {
        try {
            let userId = ctx.message.reply_to_message.text.split('-')[0]
            ctx.telegram.sendMessage(userId,menu[ctx.session.lang[ctx.message.chat.id]]['home'][1]+ctx.message.text);
        } catch (error) {
            console.log(error);
        }
    }
})



bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
