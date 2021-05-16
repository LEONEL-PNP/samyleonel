let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
Lol

MY GIT:

Lol
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

