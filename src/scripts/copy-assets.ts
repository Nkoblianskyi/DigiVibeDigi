// scripts/copy-assets.ts
import fs from 'fs-extra'
import path from 'path'

const fromBase = path.resolve('src/assets_new_spain')
const toBase = path.resolve('public/hidden_assets')

// Що копіювати
const folders = ['img', 'css', 'fonts', 'js']

async function copyAll() {
    for (const folder of folders) {
        const from = path.join(fromBase, folder)
        const to = path.join(toBase, folder)

        try {
            await fs.copy(from, to)
            console.log(`✅ ${folder} скопійовано в ${to}`)
        } catch (err) {
            console.error(`❌ Помилка при копіюванні ${folder}:`, err)
        }
    }
}

copyAll()
