import * as fs from 'fs'
import * as path from 'path'
import template, { SchemeName } from './template'

const filePath = (variant: string, bordered: boolean) =>
  path.join(process.cwd(), `/catppuccin-${variant}${bordered ? '-bordered' : ''}.json`)

;['latte', 'frappe', 'macchiato', 'mocha'].map((variant: SchemeName) => {
  const bordered = JSON.stringify(template(variant, true), null, '\t')
  const nonBordered = JSON.stringify(template(variant, false), null, '\t')

  fs.writeFileSync(filePath(variant, true), bordered)
  fs.writeFileSync(filePath(variant, false), nonBordered)
  console.log(`Updated ${variant}`)
})
