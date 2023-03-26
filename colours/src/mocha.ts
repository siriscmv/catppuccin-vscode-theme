import color from './color'

const u = color('#11111b') // Crust
const e = color('#181825') // Mantle

const syntax = {
  tag: e`#89dceb`, // Sky
  func: e`#f9e2af`, // Yellow
  entity: e`#89b4fa`, // Blue
  string: e`#a6e3a1`, // Green
  regexp: e`#94e2d5`, // Teal
  markup: e`#f38ba8`, // Red
  keyword: e`#fab387`, // Peach
  special: e`#f5e0dc`, // Rosewater
  comment: e`#74c7ec`.alpha(0.5), // Sapphire
  constant: e`#cba6f7`, // Mauve
  operator: e`#f5c2e7` // Pink
}

const vcs = {
  added: e`#a6e3a1`, // Green
  modified: e`#89b4fa`, // Blue
  removed: e`#f38ba8` // Red
}

const editor = {
  fg: e`#cdd6f4`, // Text
  bg: e`#11111b`, // Crust
  line: e`#1e1e2e`, // Base
  selection: {
    active: e`#89b4fa`.alpha(0.25), // Blue
    inactive: e`#89b4fa`.alpha(0.13) // Blue
  },
  findMatch: {
    active: e`#9399b2`, // Overlay2
    inactive: e`#9399b2`.alpha(0.4) // Overlay2
  },
  gutter: {
    active: e`#bac2de`.alpha(0.8), // Subtext1
    normal: e`#bac2de`.alpha(0.4) // Subtext1
  },
  indentGuide: {
    active: e`#313244`.alpha(0.35), // Surface0
    normal: e`#313244`.alpha(0.18) // Surface0
  }
}

const ui = {
  fg: u`#6c7086`, // Overlay0
  bg: u`#181825`, // Mantle
  line: u`#181825`, // Mantle
  selection: {
    active: u`#9399b2`.alpha(0.15), // Overlay2
    normal: u`#7f849c`.alpha(0.12) // Overlay1
  },
  panel: {
    bg: u`#181825`, // Mantle
    shadow: u`#11111b`.alpha(0.7) // Crust
  }
}

const common = {
  accent: u`#cba6f7`, // Mauve
  error: u`#f38ba8` // Red
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
