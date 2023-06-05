const {Markup} = require('telegraf');

const menu = { 
    'b1k':Markup.keyboard([
        ['Bizning xizmatlar','TAXI'],
        ['DOSTAVKA','BONUSLAR'],
        ['Hujjat joylash'],
        ['Tilni almashtirish']
    ]),
    'b1t':[
        'Bizning xizmatlar',
        'TAXI',
        'DOSTAVKA',
        'BONUSLAR',
        'Hujjat joylash',
        'Tilni almashtirish'
    ],
    'b1.1k':Markup.keyboard([
        ['Straxovka','Texasmotor'],
        ['Taxi Nakleyka Va Lampa','Karta Pobytu'],
        ['Sog\'liq uchun sug\'urta'],
        ['Aeraportdan kutib olish xizmati'],
        ['⬅️'],
    ]),
    'b1.1t':[
        'Straxovka',
        'Texasmotor',
        'Taxi Nakleyka Va Lampa',
        'Karta Pobytu',
        'Sog\'liq uchun sug\'urta',
        'Aeraportdan kutib olish xizmati',
    ],
    'b1.2k':Markup.keyboard([
        ['UBER','BOLT'],
        ['FREENOW'],
        ['⬅️'],
    ]),
    'b1.2t':[
        'UBER',
        'BOLT',
        'FREENOW',
    ],
    'b1.3k':Markup.keyboard([
        ['UBER EATS','BOLT FOOD'],
        ['GLOVO'],
        ['⬅️'],
    ]),
    'b1.3t':[
        'UBER EATS',
        'BOLT FOOD',
        'GLOVO',
    ],
    'b1.4k':Markup.keyboard([
        ['Polsha Haydovchilik guvohnomasi'],
        ['Litsenziya xizmatlariga yordam'],
        ['Sport zallariga chegirma','Sartaroshlik xizmati'],
        ['Ijtimoiy tarmoqlarimizdagi eng faol ishtirokch'],
        ['Eng ko\'p pul ishlagan azomizga 100 zlot'],
        ['⬅️'],
    ]),
    'b1.4t':[
        'Polsha Haydovchilik guvohnomasi',
        'Litsenziya xizmatlariga yordam',
        'Sport zallariga chegirma',
        'Sartaroshlik xizmati',
        'Ijtimoiy tarmoqlarimizdagi eng faol ishtirokch',
        'Eng ko\'p pul ishlagan azomizga 100 zlot'
    ],
    'b1.1.1k':Markup.keyboard([
        ['1 yillik','2 yillik'],
        ['⬅️'],
    ]),
    'b1.1.1t':[
        '1 yillik',
        '2 yillik'
    ],    
    'b1.2.1k':Markup.keyboard([
        ['Yangi akkaunt ochish kerakmi(UBER)?'],
        ['Partniorni o\'zgartirish(UBER)','Sizda qanday muammo bor'],
        ['⬅️'],
    ]),
    'b1.2.1t':[
        'Yangi akkaunt ochish kerakmi(UBER)?',
        'Partniorni o\'zgartirish(UBER)',
        'Sizda qanday muammo bor',
    ],
    'b1.2.2k':Markup.keyboard([
        ['Yangi akkaunt ochish kerakmi(BOLT)?'],
        ['Sizda qanday muammo bor'],
        ['⬅️'],
    ]),
    'b1.2.2t':[
        'Yangi akkaunt ochish kerakmi(BOLT)?',
        'Sizda qanday muammo bor',
    ],
    'b1.2.3k':Markup.keyboard([
        ['Yangi akkaunt ochish kerakmi(FREENOW)?'],
        ['Sizda qanday muammo bor'],
        ['⬅️'],
    ]),
    'b1.2.3t':[
        'Yangi akkaunt ochish kerakmi(FREENOW)?',
        'Sizda qanday muammo bor',
    ],

    'b1.3.1k':Markup.keyboard([
        ['Yangi akkaunt ochish kerakmi(UBER EATS)?'],
        ['Partniorni o\'zgartirish(UBER EATS)','Sizda qanday muammo bor'],
        ['⬅️'],
    ]),
    'b1.3.1t':[
        'Yangi akkaunt ochish kerakmi(UBER EATS)?',
        'Partniorni o\'zgartirish(UBER EATS)',
        'Sizda qanday muammo bor',
    ],

    'b1.3.2k':Markup.keyboard([
        ['Yangi akkaunt ochish kerakmi(BOLT FOOD)?'],
        ['Partniorni o\'zgartirish(BOLT FOOD)','Sizda qanday muammo bor'],
        ['⬅️'],
    ]),
    'b1.3.2t':[
        'Yangi akkaunt ochish kerakmi(BOLT FOOD)?',
        'Partniorni o\'zgartirish(BOLT FOOD)',
        'Sizda qanday muammo bor',
    ],

    'b1.3.3k':Markup.keyboard([
        ['Yangi akkaunt ochish kerakmi(GLOVO)?'],
        ['Partniorni o\'zgartirish(GLOVO)','Sizda qanday muammo bor'],
        ['⬅️'],
    ]),
    'b1.3.3t':[
        'Yangi akkaunt ochish kerakmi(GLOVO)?',
        'Partniorni o\'zgartirish(GLOVO)',
        'Sizda qanday muammo bor',
    ],
    'new':'Yangi akkaunt ochish uchun ushbu faylni to\'ldirib. menga jo\'nating',
    'home':['bosh menyu','Admin Xabari: '],
    'comment':[
        'o\'z muammogizni yoki savolingizni yozib qoldiring.',
        'Yaxshi sizga tez orada javob qaytaramiz.'
    ],
    'file':[
        'Yangi akkaunt ochish uchun to\'ldirgan hujjatni tashlang.'+
        '\n Mos hujjat formati:  .doc .docx .pdf'+
        '\n Hujjat hajmi: min=>10KB max=>20MB',
        'Fayl hajmi mos kelmadi mos faylni jo\'nating! \n Hujjat hajmi: min=>10KB max=>20MB',
        'Fayl Formati mos kelmadi mos faylni jo\'nating! \n Mos hujjat formati:  .doc .docx .pdf',
        'Hujjat qabul qilindi!. Tez orada siz bilan bo\'g\'lanamiz'
    ],
    'update':[
        'Ism va Familiyangiz!',
        'Elektron pochta!',
        'Telefon raqamingizni ulashing.',
        'Telefon raqamingiz!',
        'Malumotlarni  tasdiqlang (to\'g\'riligini tekshiring)!\n',
        '✅Tasdiqlash',
        '❌Bekor qilish',
        'Bank hisobingiz va Bank nomi!',
        'Ism va Familiyangiz: ',
        'Elektron pochta: ',
        'Telefon raqamingiz: ',
        'Bank hisobingiz va Bank nomi: '
    ]
}

module.exports = menu;