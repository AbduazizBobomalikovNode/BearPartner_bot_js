const {Markup} = require('telegraf');

const menu = {
    'b1k':Markup.keyboard([
        ['Наши услуги','ТАКСИ'],
        ['ДОСТАВК','БОНУСЫ'],
        ['Поместить документ'],
        ['Переключить язык']
    ]),
    'b1t': [
        'Наши услуги',
        'ТАКСИ',
        'ДОСТАВК',
        'БОНУСЫ',
        'Поместить документ',
        'Переключить язык'
    ],
    'b1.1k':Markup.keyboard([
        ['Страхование','Техасмотор'],
        ['Такси Наклейка И Лампа', 'Карта Побыту'],
        ['Медицинская страховка'],
        ['Встреча в аэропорту'],
        ['⬅️'],
    ]),
    'b1.1t': [
        'Страхование',
        'Техасмотор',
        'Такси Наклейка И Лампа',
        'Карта Побыту',
        'Медицинская страховка',
        'Встреча в аэропорту',
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
        ['Польские водительские права'],
        ['Поддержка лицензионных услуг'],
        ['Скидка на спортзал','Парикмахерские услуги'],
        ['Самый активный участник наших социальных сетей'],
        ['100 злотых тому, кто заработает больше всех'],
        ['⬅️'],
    ]),
    'b1.4t': [
        'Польские водительские права',
        'Поддержка лицензионных услуг',
        'Скидка на спортзал',
        'Парикмахерские услуги',
        'Самый активный участник наших социальных сетей',
        '100 злотых тому, кто заработает больше всех'
    ],
    'b1.1.1k':Markup.keyboard([
        ['1 год','2 года'],
        ['⬅️'],
    ]),
    'b1.1.1t':[
        '1 год',
        '2 года'
    ],
    'b1.2.1k':Markup.keyboard([
        ['Нужно открыть новую учетную запись (UBER)?'],
        ['Сменить партнера (UBER)','Какая у вас проблема?'],
        ['⬅️'],
    ]),
    'b1.2.1t': [
        'Нужно открыть новую учетную запись (UBER)?',
        'Сменить партнера (UBER)',
        'Какая у вас проблема?',
    ],
    'b1.2.2k':Markup.keyboard([
        ['Нужно открыть новую учетную запись (BOLT)?'],
        ['Какая у вас проблема?'],
        ['⬅️'],
    ]),
    'b1.2.2t': [
        'Нужно открыть новую учетную запись (BOLT)?',
        'Какая у вас проблема?',
    ],
    'b1.2.3k':Markup.keyboard([
        ['Нужно открыть новую учетную запись (FREENOW)?'],
        ['Какая у вас проблема?'],
        ['⬅️'],
    ]),
    'b1.2.3t': [
        'Нужно открыть новую учетную запись (FREENOW)?',
        'Какая у вас проблема?',
    ],

    'b1.3.1k':Markup.keyboard([
        ['Нужно открыть новую учетную запись (UBER EATS)?'],
        ['Сменить партнера (UBER EATS)','Какая у вас проблема?'],
        ['⬅️'],
    ]),
    'b1.3.1t': [
        'Нужно открыть новую учетную запись (UBER EATS)?',
        'Сменить партнера (UBER EATS)',
        'Какая у вас проблема?',
    ],

    'b1.3.2k':Markup.keyboard([
        ['Нужно открыть новую учетную запись (BOLT FOOD)?'],
        ['Сменить партнера(BOLT FOOD)','Какая у вас проблема?'],
        ['⬅️'],
    ]),
    'b1.3.2t': [
        'Нужно открыть новую учетную запись (BOLT FOOD)?',
        'Сменить партнера(BOLT FOOD)',
        'Какая у вас проблема?',
    ],

    'b1.3.3k':Markup.keyboard([
        ['Нужно открыть новую учетную запись (GLOVO)?'],
        ['Сменить партнера(GLOVO)','Какая у вас проблема?'],
        ['⬅️'],
    ]),
    'b1.3.3t': [
        'Нужно открыть новую учетную запись (GLOVO)?',
        'Сменить партнера(GLOVO)',
        'Какая у вас проблема?',
    ],
    'new': 'Заполните этот файл, чтобы открыть новую учетную запись. отправьте меня',
    'home':['главное меню','Сообщение администратора: '],
    'comment':[
        "запишите вашу проблему или вопрос.",
        'Ну, мы скоро свяжемся с вами'
    ],
    'file':[
        'Выбросьте документ, который вы заполнили, чтобы открыть новый счет'+
        '\n Совместимый формат документа: .doc .docx .pdf'+
        '\n Размер документа: мин.=>10 КБ макс.=>20 МБ',
        'Размер файла не соответствует Пожалуйста, пришлите соответствующий файл! \n Размер документа: мин.=>10 КБ макс.=>20 МБ',
        'Формат файла не соответствует Пожалуйста, пришлите подходящий файл! \n Совместимый формат документа: .doc .docx .pdf',
        'Документ принят!. Мы свяжемся с вами в ближайшее время.'
    ],
    'update':[
        'Ваше имя и фамилия!',
        'Электронная почта!',
        'Поделитесь своим номером телефона.',
        'Ваш номер телефона!',
        'Проверить данные (проверить на точность)!\n',
        '✅Подтверждать',
        '❌Отмена',
        "Ваш банковский счет и название банка!",
        'Ваше имя и фамилия: ',
        'Электронная почта: ',
        'Ваш номер телефона: ',
        'Ваш банковский счет и название банка:'
    ]
}

module.exports = menu;