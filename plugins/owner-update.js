import { execSync } from 'child_process'
let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/Nurutomo/wabot-aq.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) import 'fs'.readdirSync('plugins').map(v => global.reload('', v))
    m.reply(stdout.toString())
  }
}
handler.help = ['update']
handler.tags = ['owner']

handler.command = /^update$/i
handler.rowner = true
handler.fail = null

export default handler
