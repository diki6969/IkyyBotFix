import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .ai apa itu root`
  let api = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${global.lolkey}&text=${text}&user=user-unique-id`)
  let res = await api.json()
  m.reply(res.result)
}
handler.command = ['ai']
handler.tags = ['fun']
handler.help = ['ai']

export default handler