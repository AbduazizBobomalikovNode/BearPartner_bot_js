# BearPartner Bot

Uch tilli Telegram bot — hamkorlar bilan aloqa uchun.

Foydalanuvchi o'ziga qulay tilni tanlaydi (o'zbek, rus, ingliz), profilini to'ldiradi, fikr qoldiradi yoki fayl yuboradi. Bot ularning barchasini tartibda yuritadi.

---

**Sahifa:** [abduazizbobomalikovnode.github.io/BearPartner_bot_js/](https://abduazizbobomalikovnode.github.io/BearPartner_bot_js/)

## Nima qiladi

- **Til tanlash** — o'zbek, rus va ingliz; menyu to'liq tanlangan tilda
- **Profilni yangilash** — foydalanuvchi o'z ma'lumotini o'zi tahrirlaydi
- **Fikr qoldirish** — izoh yozish va uni yuborish
- **Fayl yuborish** — hujjat yoki rasm qabul qilinadi

## Qanday ishlaydi

Bot Telegraf'ning sahna (Scene) mexanizmida qurilgan. Har vazifa — alohida sahna: foydalanuvchi menyudan bandni tanlaydi, tegishli sahnaga kiradi va suhbat shu sahna ichida davom etadi.

```
/start
  └─► til tanlash sahnasi        (room/lang.js)
        └─► asosiy menyu          (keyboard/uz | ru | eng)
              ├─► profil          (room/update.js)
              ├─► fikr            (room/comment.js)
              └─► fayl            (room/file.js)
```

Menyular har til uchun alohida faylda (`keyboard/`), shuning uchun yangi til qo'shish uchun kodga tegish shart emas — yangi menyu fayli yoziladi va tanlash ro'yxatiga qo'shiladi.

## O'rnatish

```bash
git clone https://github.com/AbduazizBobomalikovNode/BearPartner_bot_js.git
cd BearPartner_bot_js
npm install

cp .env.example .env      # BOT_TOKEN ni yozing
npm start
```

## Environment

| O'zgaruvchi | Nima uchun |
|---|---|
| `BOT_TOKEN` | [@BotFather](https://t.me/BotFather) bergan token |

Token berilmasa bot ishga tushmaydi va buni aytadi.

## Tuzilma

```
index.js         bot, sahnalar ro'yxati
keyboard/
  uz.js ru.js eng.js     har til uchun menyu
room/
  lang.js        til tanlash
  update.js      profilni yangilash
  comment.js     fikr qoldirish
  file.js        fayl yuborish
function/        yordamchi funksiyalar
files/           qabul qilingan fayllar
```

## Texnologiyalar

Node.js · Telegraf (Scenes)
