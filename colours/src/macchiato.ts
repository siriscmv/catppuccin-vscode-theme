import color from './color'

const u = color('#181926') // Crust
const e = color('#1e2030') // Mantle

const syntax = {
  tag: e`#91d7e3`, // Sky
  func: e`#eed49f`, // Yellow
  entity: e`#8aadf4`, // Blue
  string: e`#a6da95`, // Green
  regexp: e`#8bd5ca`, // Teal
  markup: e`#ed8796`, // Red
  keyword: e`#f5a97f`, // Peach
  special: e`#f4dbd6`, // Rosewater
  comment: e`#7dc4e4`.alpha(0.5), // Sapphire
  constant: e`#c6a0f6`, // Mauve
  operator: e`#f5bde6` // Pink
}

const vcs = {
  added: e`#a6da95`, // Green
  modified: e`#8aadf4`, // Blue
  removed: e`#ed8796` // Red
}

const editor = {
  fg: e`#cad3f5`, // Text
  bg: e`#24273a`, // Base
  line: e`#181926`, // Crust
  selection: {
    active: e`#8aadf4`.alpha(0.25), // Blue
    inactive: e`#8aadf4`.alpha(0.13) // Blue
  },
  findMatch: {
    active: e`#939ab7`, // Overlay2
    inactive: e`#939ab7`.alpha(0.4) // Overlay2
  },
  gutter: {
    active: e`#b8c0e0`.alpha(0.8), // Subtext1
    normal: e`#b8c0e0`.alpha(0.4) // Subtext1
  },
  indentGuide: {
    active: e`#363a4f`.alpha(0.35), // Surface0
    normal: e`#363a4f`.alpha(0.18) // Surface0
  }
}

const ui = {
  fg: u`#6e738d`, // Overlay0
  bg: u`#1e2030`, // Mantle
  line: u`#181926`, // Crust
  selection: {
    active: u`#939ab7`.alpha(0.15), // Overlay2
    normal: u`#8087a2`.alpha(0.12) // Overlay1
  },
  panel: {
    bg: u`#1e2030`, // Mantle
    shadow: u`#181926`.alpha(0.7) // Crust
  }
}

const common = {
  accent: u`#c6a0f6`, // Mauve
  error: u`#ed8796` // Red
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
