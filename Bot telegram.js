const {Telegraf} = require('telegraf');
const {session} = require('telegraf');
const dotenv = require('dotenv');
const {message} = require("telegraf/filters");

// загрузить переменные окружения из файла .env
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN);

// объект для временного хранения состояния пользователя
const userState = {};

bot.use(session());
// команда /grant для выдачи прав доступа
bot.command('grant', (ctx) => {
  console.log(ctx.message)
  const fromId = ctx.message.from.id;
  const chatId = '-933206111';
  // проверяем существует ли состояние пользователя
  if (!userState[fromId]) {
    userState[fromId] = {};
  }
  // выставляем количество сообщений и время доступа
  userState[fromId].messagesLeft = 10;
  userState[fromId].expiration = Date.now() + 3600 * 1000; // доступ на час
  // отвечаем пользователю
  ctx.reply(`Вы получили права доступа на 10 сообщений в течение 1 часа`);
});

// обработчик входящих сообщений
bot.on('message', (ctx) => {
  const fromId = ctx.message.from.id;
  const chatId = ctx.message.chat.id;
  // проверяем существует ли состояние пользователя
  if (!userState[fromId]) {
    userState[fromId] = {};
  }
  // проверяем, есть ли у пользователя доступ
  if (userState[fromId].messagesLeft > 0 && userState[fromId].expiration > Date.now()) {
    // уменьшаем количество доступных сообщений
    userState[fromId].messagesLeft--;
    // отправляем сообщение
    ctx.telegram.sendMessage(`chatId, Осталось: ${userState[fromId].messagesLeft} сообщений`);
  } else {
    // уведомляем пользователя, что доступ закрыт
    ctx.reply(`Доступ закрыт. Получить права доступа можно командой /grant`);
  }
});

bot.launch();
