const {Markup} = require('telegraf');

const menu = {
    'b1k':Markup.keyboard([
        ['Our services','TAXI'],
        ['DOSTAVK','BONUSES'],
        ['Post Document'],
        ['Switch Language']
    ]),
    'b1t':[
        'Our services',
        'TAXI',
        'DOSTAVK',
        'BONUSES',
        'Post Document',
        'Switch Language'
    ],
    'b1.1k':Markup.keyboard([
        ['Insurance','Texasmotor'],
        ['Taxi Sticker And Lamp','Card Pobytu'],
        ["Health Insurance"],
        ['Airport pickup service'],
        ['⬅️'],
    ]),
    'b1.1t':[
        'Insurance',
        'Texasmotor',
        'Taxi Sticker And Lamp',
        'Card Pobytu',
        "Health Insurance",
        'Airport pickup service',
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
        ['Polish Driving License'],
        ['Licensing Services Support'],
        ['Gym discount','Hairdressing service'],
        ['The most active participant in our social networks'],
        ['100 zlotys for the person who earned the most money'],
        ['⬅️'],
    ]),
    'b1.4t':[
        'Polish Driving License',
        'Licensing Services Support',
        'Gym discount',
        'Hairdressing service',
        'The most active participant in our social networks',
        "100 zlotys for the person who earned the most money"
    ],
    'b1.1.1k':Markup.keyboard([
        ['1 year','2 years'],
        ['⬅️'],
    ]),
    'b1.1.1t':[
        '1 year',
        '2 years'
    ],
    'b1.2.1k':Markup.keyboard([
        ['Need to open a new account (UBER)?'],
        ['Change Partner(UBER)','What\'s your problem'],
        ['⬅️'],
    ]),
    'b1.2.1t':[
        'Need to open a new account (UBER)?',
        'Change Partner(UBER)',
        'What\'s your problem',
    ],
    'b1.2.2k':Markup.keyboard([
        ['Need to open a new account (BOLT)?'],
        ['What\'s your problem'],
        ['⬅️'],
    ]),
    'b1.2.2t':[
        'Need to open a new account (BOLT)?',
        'What\'s your problem',
    ],
    'b1.2.3k':Markup.keyboard([
        ['Need to open a new account(FREENOW)?'],
        ['What\'s your problem'],
        ['⬅️'],
    ]),
    'b1.2.3t':[
        'Need to open a new account(FREENOW)?',
        'What\'s your problem',
    ],

    'b1.3.1k':Markup.keyboard([
        ['Need to open a new account (UBER EATS)?'],
        ['Change partner(UBER EATS)','What\'s your problem'],
        ['⬅️'],
    ]),
    'b1.3.1t':[
        'Need to open a new account (UBER EATS)?',
        'Change partner(UBER EATS)',
        'What\'s your problem',
    ],

    'b1.3.2k':Markup.keyboard([
        ['Need to open a new account (BOLT FOOD)?'],
        ['Change partner(BOLT FOOD)','What\'s your problem'],
        ['⬅️'],
    ]),
    'b1.3.2t':[
        'Do you need to open a new account (BOLT FOOD)?',
        'Change partner(BOLT FOOD)',
        'What\'s your problem',
    ],

    'b1.3.3k':Markup.keyboard([
        ['Do you need to open a new account (GLOVO)?'],
        ['Change partner(GLOVO)','What\'s your problem'],
        ['⬅️'],
    ]),
    'b1.3.3t':[
        'Do you need to open a new account (GLOVO)?',
        'Change partner(GLOVO)',
        'What\'s your problem',
    ],
    'new':'Fill this file to open a new account. send me',
    'home':['main menu','Admin Message: '],
    'comment':[
        "write down your problem or question.",
        'Well we\'ll get back to you soon.'
    ],
    'file':[
        'Throw away the document you filled out to open a new account.'+
        '\n Compatible document format: .doc .docx .pdf'+
        '\n Document size: min=>10KB max=>20MB',
        'The file size does not match Please send a matching file! \n Document size: min=>10KB max=>20MB',
        'The file format does not match Please send a suitable file! \n Compatible document format: .doc .docx .pdf',
        'Document accepted!. We will contact you soon.'
    ],
    'update':[
        'Your first and last name!',
        'Email!',
        'Share your phone number.',
        'Your phone number!',
        'Verify the data (check for accuracy)!\n',
        '✅Confirm',
        '❌Cancel',
        'Your Bank Account and Bank Name!',
        'Your first and last name: ',
        'Email: ',
        'Your phone number: ',
        'Your Bank Account and Bank Name:'
    ]
}

module.exports = menu;