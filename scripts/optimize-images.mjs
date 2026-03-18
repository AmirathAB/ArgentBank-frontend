import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join } from 'path'

const inputDir = './public/img'
const files = readdirSync(inputDir)

for (const file of files) {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const input = join(inputDir, file)
    const output = join(inputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'))
    await sharp(input).webp({ quality: 80 }).toFile(output)
    console.log(`✅ ${file} → ${file.replace(/\.(png|jpg|jpeg)$/i, '.webp')}`)
  }
}
