import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'
import borderLesstemplate from './borderless'

const filePath = (variant: string, ext?: string) =>
  path.join(process.cwd(), `/catppuccin-${variant}${ext ? '-bordered' : ''}.json`);
  

['latte', 'frappe', 'macchiato', 'mocha'].map((variant: SchemeName) => {
  const bordered = JSON.stringify(template(variant, true), null, '\t')
  const normal = JSON.stringify(template(variant, false), null, '\t')
  const borderless = JSON.stringify(borderLesstemplate(variant), null, '\t')

  fs.writeFileSync(filePath(variant), normal)
  fs.writeFileSync(filePath(variant, 'bordered'), bordered)
  fs.writeFileSync(filePath(variant, 'borderless'), borderless)

  console.log(`Updated ${variant}`)
})
