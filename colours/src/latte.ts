import color from './color'

const u = color('#dce0e8') // Crust
const e = color('#e6e9ef') // Mantle

const syntax = {
  tag: e`#04a5e5`, // Sky
  func: e`#df8e1d`, // Yellow
  entity: e`#1e66f5`, // Blue
  string: e`#40a02b`, // Green
  regexp: e`#179299`, // Teal
  markup: e`#d20f39`, // Red
  keyword: e`#fe640b`, // Peach
  special: e`#dc8a78`, // Rosewater
  comment: e`#209fb5`.alpha(0.5), // Sapphire
  constant: e`#8839ef`, // Mauve
  operator: e`#ea76cb` // Pink
}

const vcs = {
  added: e`#40a02b`, // Green
  modified: e`#1e66f5`, // Blue
  removed: e`#d20f39` // Red
}

const editor = {
  fg: e`#4c4f69`, // Text
  bg: e`#eff1f5`, // Base
  line: e`#dce0e8`, // Crust
  selection: {
    active: e`#1e66f5`.alpha(0.25), // Blue
    inactive: e`#1e66f5`.alpha(0.13) // Blue
  },
  findMatch: {
    active: e`#7c7f93`, // Overlay2
    inactive: e`#7c7f93`.alpha(0.4) // Overlay2
  },
  gutter: {
    active: e`#5c5f77`.alpha(0.8), // Subtext1
    normal: e`#5c5f77`.alpha(0.4) // Subtext1
  },
  indentGuide: {
    active: e`#ccd0da`.alpha(0.35), // Surface0
    normal: e`#ccd0da`.alpha(0.18) // Surface0
  }
}

const ui = {
  fg: u`#9ca0b0`, // Overlay0
  bg: u`#e6e9ef`, // Mantle
  line: u`#dce0e8`, // Crust
  selection: {
    active: u`#7c7f93`.alpha(0.15), // Overlay2
    normal: u`#8c8fa1`.alpha(0.12) // Overlay1
  },
  panel: {
    bg: u`#e6e9ef`, // Mantle
    shadow: u`#dce0e8`.alpha(0.7) // Crust
  }
}

const common = {
  accent: u`#8839ef`, // Mauve
  error: u`#d20f39` // Red
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
