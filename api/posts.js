import fs from 'fs'
import path from 'pathe'

const filePath = path.resolve('.', 'posts/1.md')
const mdBuffer = fs.readFileSync(filePath)

export default function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.send(mdBuffer)
}