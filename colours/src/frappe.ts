import color from './color'

const u = color('#232634') // Crust
const e = color('#292c3c') // Mantle

const syntax = {
  tag: e`#99d1db`, // Sky
  func: e`#e5c890`, // Yellow
  entity: e`#8caaee`, // Blue
  string: e`#a6d189`, // Green
  regexp: e`#81c8be`, // Teal
  markup: e`#e78284`, // Red
  keyword: e`#ef9f76`, // Peach
  special: e`#f2d5cf`, // Rosewater
  comment: e`#85c1dc`.alpha(0.5), // Sapphire
  constant: e`#ca9ee6`, // Mauve
  operator: e`#f4b8e4` // Pink
}

const vcs = {
  added: e`#a6d189`, // Green
  modified: e`#8caaee`, // Blue
  removed: e`#e78284` // Red
}

const editor = {
  fg: e`#c6d0f5`, // Text
  bg: e`#232634`, // Crust
  line: e`#303446`, // Base
  selection: {
    active: e`#8caaee`.alpha(0.25), // Blue
    inactive: e`#8caaee`.alpha(0.13) // Blue
  },
  findMatch: {
    active: e`#949cbb`, // Overlay2
    inactive: e`#949cbb`.alpha(0.4) // Overlay2
  },
  gutter: {
    active: e`#b5bfe2`.alpha(0.8), // Subtext1
    normal: e`#b5bfe2`.alpha(0.4) // Subtext1
  },
  indentGuide: {
    active: e`#414559`.alpha(0.35), // Surface0
    normal: e`#414559`.alpha(0.18) // Surface0
  }
}

const ui = {
  fg: u`#737994`, // Overlay0
  bg: u`#292c3c`, // Mantle
  line: u`#292c3c`, // Mantle
  selection: {
    active: u`#949cbb`.alpha(0.15), // Overlay2
    normal: u`#838ba7`.alpha(0.12) // Overlay1
  },
  panel: {
    bg: u`#292c3c`, // Mantle
    shadow: u`#232634`.alpha(0.7) // Crust
  }
}

const common = {
  accent: u`#ca9ee6`, // Mauve
  error: u`#e78284` // Red
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
