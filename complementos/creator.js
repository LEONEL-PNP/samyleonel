let handler = function (m) {
  // this.sendContact(m.chat, '00000', 'Nurutomo', m)
  this.sendContact(m.chat, '51917473908', '👑Samu330👑', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
