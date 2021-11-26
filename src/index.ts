import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})


client.on('ready', () => {
    console.log('Bot ready !')

    const guildId = 'YOURGUILGID';
    const guild = client.guilds.cache.get(guildId)

    setInterval(() => {

        client.user?.setActivity('https://nosaria-mc.fr/', { type: 'WATCHING' })

    }, 15000);

    client.user?.setActivity('https://nosaria-mc.fr/', { type: 'WATCHING' })
})


client.login(process.env.TOKEN)