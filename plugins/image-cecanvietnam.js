let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, author, author, pickRandom(vietnam), ['Get again', '/cecanvietnam'], m)
}
handler.help = ['cecanvietnam']
handler.tags = ['image']

handler.command = /^cecanvietnam$/i
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let vietnam = [
"https://l.top4top.io/p_1962nyvh11.jpg",
"https://a.top4top.io/p_1962o8k741.jpg",
"https://k.top4top.io/p_1962wlno91.jpg",
"https://f.top4top.io/p_1962z7kwy1.jpg",
"https://h.top4top.io/p_1962yw2d21.jpg",
"https://g.top4top.io/p_1962osw6a1.jpg",
"https://f.top4top.io/p_19623ni511.jpg",
"https://e.top4top.io/p_19623e9jc1.jpg",
"https://d.top4top.io/p_19624a1nx1.jpg",
"https://a.top4top.io/p_19621fhkf1.jpg",
"https://c.top4top.io/p_1962agq1d1.jpg",
"https://b.top4top.io/p_1962336ar1.jpg",
"https://l.top4top.io/p_1962so54r1.jpg",
"https://e.top4top.io/p_1962raeau1.jpg",
"https://g.top4top.io/p_1962x1rwp1.jpg",
"https://f.top4top.io/p_19621ly6e1.jpg",
"https://c.top4top.io/p_19629qnrx1.jpg",
"https://b.top4top.io/p_19624cbrb1.jpg",
"https://d.top4top.io/p_1962i766v1.jpg",
"https://a.top4top.io/p_1962b54g21.jpg",
"https://l.top4top.io/p_1962o9glz1.jpg",
"https://k.top4top.io/p_1962iggh51.jpg",
"https://j.top4top.io/p_19620ek4z1.jpg",
"https://c.top4top.io/p_1962betcu1.jpg",
"https://b.top4top.io/p_1962pb2zp1.jpg",
"https://k.top4top.io/p_1962ie7em1.jpg",
"https://l.top4top.io/p_19629mmlb1.jpg",
"https://j.top4top.io/p_1962rclsb1.jpg",
"https://h.top4top.io/p_19626bkf41.jpg",
"https://i.top4top.io/p_1962amow81.jpg",
"https://g.top4top.io/p_1962lkiie1.jpg",
"https://f.top4top.io/p_1962n4tc91.jpg",
"https://e.top4top.io/p_1962xoylt1.jpg",
"https://g.top4top.io/p_1962wxoa51.jpg",
"https://c.top4top.io/p_1962pve3q1.jpg"
]