const {Telegraf} = require('telegraf');

const bot = new Telegraf('6045348908:AAEk2TL4Wo0lmql_ntP9s_hjKAVWP71140o'); // замените 'BOT_TOKEN' на настоящий токен вашего бота

// создаем объекты, которые будут содержать информацию о пользователях, получивших доступ к чату
let accessList = {};

// обработчик команды для выдачи доступа пользователю
bot.command('grant_access', (ctx) => {
    const user = ctx.message.from;
    const chatId = -933206111;
    const duration = 60; // продолжительность доступа в секундах

    accessList[user.id] = {
        chatId,
        messagesLeft: 10, // количество сообщений, которые пользователь может написать в чате
        expireAt: Date.now() + duration * 1000 // время окончания доступа в миллисекундах
    };

    ctx.reply(`${user.first_name} ${user.last_name ?? ''} получил доступ к чату на ${duration} секунд`);
});

// обработчик сообщений
bot.on('message', async (ctx) => {
    const user = ctx.message.from;
    const chatId = -933206111;

    if (accessList[user.id] && accessList[user.id].chatId === chatId) {
        // если пользователь есть в списке доступа для этого чата
        const access = accessList[user.id];

        if (access.messagesLeft === 0 || Date.now() > access.expireAt) {
            // если пользователь исчерпал количество сообщений или время доступа истекло
            delete accessList[user.id];
            ctx.reply(`${user.first_name} ${user.last_name ?? ''}, ваш доступ к чату закрыт`);
        } else {
            // если пользователь может отправить сообщение
            access.messagesLeft--;
            await ctx.telegram.sendMessage(chatId, ctx.message.text);
        }
    }
});

const botLaunch = async () => {
    await bot.launch()
}
botLaunch()

