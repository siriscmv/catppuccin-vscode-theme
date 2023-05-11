import { variants } from '@catppuccin/palette'
import * as catppuccin from '../colours'

export type SchemeName = 'latte' | 'frappe' | 'macchiato' | 'mocha'

const terminalColors = {
  latte: {
    black: catppuccin.latte.ui.line.hex(),
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#d1d1d1'
  },
  frappe: {
    black: catppuccin.frappe.ui.line.hex(),
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#ffffff'
  },
  macchiato: {
    black: catppuccin.macchiato.ui.line.hex(),
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#ffffff'
  }, 
  mocha: {
    black: catppuccin.mocha.ui.line.hex(),
    white: '#c7c7c7',
    brightBlack: '#686868',
    brightWhite: '#ffffff'
  }
}

export default (variant: SchemeName,) => {
  const palette = variants[variant];
  const scheme = catppuccin[variant];
  
  return {
    type: variant === 'latte' ? 'light' : 'dark',
    colors: {
      "foreground": "#cccccc",
      "focusBorder": `${palette.crust.hex}00`,
      "selection.background": palette.mauve.hex,
      "scrollbar.shadow": `${palette.crust.hex}00`,
      "activityBar.foreground": "#ffffff",
      "activityBar.background": palette.crust.hex,
      "activityBar.inactiveForeground": "#cccccc66",
      "activityBarBadge.foreground": "#ffffff",
      "activityBarBadge.background": "#343434",
      "activityBar.border": "#34343400",
      "activityBar.activeBackground": palette.crust.hex,
      "sideBar.background": palette.crust.hex,
      "sideBar.foreground": "#e6e6e6",
      "sideBarSectionHeader.background": palette.crust.hex,
      "sideBarSectionHeader.foreground": "#ffffff",
      "sideBarSectionHeader.border": palette.base,
      "sideBarTitle.foreground": "#ffffff",
      "sideBar.border": `${palette.crust.hex}00`,
      "list.inactiveSelectionBackground": "#FFFFFF0A",
      "list.inactiveSelectionForeground": "#e6e6e6",
      "list.hoverBackground": "#FFFFFF0A",
      "list.hoverForeground": "#ffffff",
      "list.activeSelectionBackground": "#FFFFFF0A",
      "list.activeSelectionForeground": "#ffffff",
      "tree.indentGuidesStroke": "#2e2e2e",
      "list.dropBackground": palette.crust.hex,
      "list.highlightForeground": "#6cc7f6",
      "list.focusBackground": "#FFFFFF0A",
      "list.focusForeground": "#e6e6e6",
      "listFilterWidget.background": palette.crust.hex,
      "listFilterWidget.outline": "#FFFFFF0A",
      "listFilterWidget.noMatchesOutline": `${palette.peach.hex}30`,
      "statusBar.foreground": "#e6e6e6",
      "statusBar.background": palette.crust.hex,
      "statusBarItem.hoverBackground": "#ffffff06",
      "statusBar.border": `${palette.crust.hex}00`,
      "statusBar.debuggingBackground": palette.crust.hex,
      "statusBar.debuggingForeground": "#e6e6e6",
      "statusBar.debuggingBorder": `${palette.crust.hex}00`,
      "statusBar.noFolderBackground": palette.crust.hex,
      "statusBar.noFolderForeground": "#e6e6e6",
      "statusBar.noFolderBorder": `${palette.crust.hex}00`,
      "statusBarItem.remoteBackground": palette.crust.hex,
      "statusBarItem.remoteForeground": "#e6e6e6",
      "titleBar.activeBackground": palette.crust.hex,
      "titleBar.activeForeground": "#e6e6e6",
      "titleBar.inactiveBackground": palette.crust.hex,
      "titleBar.inactiveForeground": "#cccccc",
      "titleBar.border": `${palette.crust.hex}00`,
      "menubar.selectionForeground": "#ffffff",
      "menubar.selectionBackground": "#ffffff14",
      "menubar.selectionBorder": "#ffffff00",
      "menu.foreground": "#cccccc",
      "menu.background": palette.crust.hex,
      "menu.selectionForeground": "#ffffff",
      "menu.selectionBackground": "#FFFFFF0A",
      "menu.selectionBorder": `${palette.crust.hex}00`,
      "menu.separatorBackground": "#ffffff10",
      "menu.border": `${palette.crust.hex}00`,
      "button.background": palette.mauve.hex,
      "button.foreground": "#ffffff",
      "button.hoverBackground": `${palette.mauve.hex}66`,
      "button.secondaryForeground": "#ffffff",
      "button.secondaryBackground": "#3a3d41",
      "button.secondaryHoverBackground": "#45494e",
      "input.background": "#FFFFFF0A",
      "input.border": `${palette.crust.hex}00`,
      "input.foreground": "#ffffff",
      "inputOption.activeBackground": "#343434",
      "inputOption.activeBorder": `${palette.crust.hex}00`,
      "inputOption.activeForeground": "#ffffff",
      "input.placeholderForeground": "#cccccc",
      "textLink.foreground": "#cccccc",
      "editor.background": palette.crust.hex,
      "editor.foreground": "#cccccc",
      "editorLineNumber.foreground": "#757575",
      "editorCursor.foreground": "#ffffff",
      "editorCursor.background": palette.crust.hex,
      "editor.selectionBackground": "#3793e040",
      "editor.inactiveSelectionBackground": "#343434",
      "editorWhitespace.foreground": "#343434",
      "editor.selectionHighlightBackground": "#FFFFFF0A",
      "editor.selectionHighlightBorder": `${palette.crust.hex}00`,
      "editor.findMatchBackground": "#515c6a",
      "editor.findMatchBorder": `${palette.crust.hex}00`,
      "editor.findMatchHighlightBackground": `${palette.peach.hex}55`,
      "editor.findMatchHighlightBorder": `${palette.crust.hex}00`,
      "editor.findRangeHighlightBackground": "#3a3d4166",
      "editor.findRangeHighlightBorder": `${palette.crust.hex}00`,
      "editor.rangeHighlightBackground": "#FFFFFF0A",
      "editor.rangeHighlightBorder": `${palette.crust.hex}00`,
      "editor.hoverHighlightBackground": "#343434",
      "editor.wordHighlightStrongBackground": "#FFFFFF0A",
      "editor.wordHighlightStrongBorder": `${palette.crust.hex}00`,
      "editor.wordHighlightBackground": "#FFFFFF0A",
      "editor.wordHighlightBorder": `${palette.crust.hex}00`,
      "editor.lineHighlightBackground": "#FFFFFF0A",
      "editor.lineHighlightBorder": "#FFFFFF0A",
      "editorLineNumber.activeForeground": "#e6e6e6",
      "editorLink.activeForeground": "#cccccc",
      "editorIndentGuide.background": "#2e2e2e00",
      "editorIndentGuide.activeBackground": "#70707000",
      "editorRuler.foreground": "#5a5a5a00",
      "editorBracketMatch.background": "#FFFFFF0A",
      "editorBracketMatch.border": "#FFFFFF0A",
      "editor.foldBackground": "#264f784d",
      "editorOverviewRuler.background": palette.crust.hex,
      "editorOverviewRuler.border": `${palette.crust.hex}00`,
      "editorError.foreground": palette.red.hex,
      "editorError.background": "#B73A3400",
      "editorError.border": "#ffffff00",
      "editorWarning.foreground": `${palette.red.hex}AA`,
      "editorWarning.background": "#A9904000",
      "editorWarning.border": "#ffffff00",
      "editorInfo.foreground": palette.sapphire.hex,
      "editorInfo.background": "#4490BF00",
      "editorInfo.border": "#4490BF00",
      "editorGutter.background": palette.crust.hex,
      "editorGutter.modifiedBackground": "#0c7d9d",
      "editorGutter.addedBackground": "#587c0c",
      "editorGutter.deletedBackground": "#94151b",
      "editorGutter.foldingControlForeground": "#c5c5c5",
      "editorCodeLens.foreground": "#FFFFFF0A",
      "editorGroup.border": `${palette.crust.hex}00`,
      "diffEditor.insertedTextBackground": "#9bb95533",
      "diffEditor.insertedTextBorder": `${palette.crust.hex}00`,
      "diffEditor.removedTextBackground": "#ff000033",
      "diffEditor.removedTextBorder": `${palette.crust.hex}00`,
      "diffEditor.border": `${palette.crust.hex}00`,
      "panel.background": palette.crust.hex,
      "panel.border": `${palette.crust.hex}00`,
      "panelTitle.activeBorder": "#343434",
      "panelTitle.activeForeground": "#ffffff",
      "panelTitle.inactiveForeground": "#757575",
      "badge.background": "#4d4d4d",
      "badge.foreground": "#ffffff",
      'terminal.background': palette.crust.hex,
      'terminal.foreground': scheme.editor.fg.hex(),
      'terminal.ansiBlack': terminalColors[variant].black,
      'terminal.ansiRed': scheme.syntax.markup.darken(0.1).hex(),
      'terminal.ansiGreen': scheme.vcs.added.hex(),
      'terminal.ansiYellow': scheme.syntax.func.darken(0.1).hex(),
      'terminal.ansiBlue': scheme.syntax.entity.darken(0.1).hex(),
      'terminal.ansiMagenta': scheme.syntax.constant.darken(0.1).hex(),
      'terminal.ansiCyan': scheme.syntax.regexp.darken(0.1).hex(),
      'terminal.ansiWhite': terminalColors[variant].white,
      'terminal.ansiBrightBlack': terminalColors[variant].brightBlack,
      'terminal.ansiBrightRed': scheme.syntax.markup.hex(),
      'terminal.ansiBrightGreen': scheme.syntax.string.hex(),
      'terminal.ansiBrightYellow': scheme.syntax.func.hex(),
      'terminal.ansiBrightBlue': scheme.syntax.entity.hex(),
      'terminal.ansiBrightMagenta': scheme.syntax.constant.hex(),
      'terminal.ansiBrightCyan': scheme.syntax.regexp.hex(),
      'terminal.ansiBrightWhite': terminalColors[variant].brightWhite,
      "breadcrumb.background": palette.crust.hex,
      "breadcrumb.foreground": "#cccccccc",
      "breadcrumb.focusForeground": "#e0e0e0",
      "editorGroupHeader.border": `${palette.crust.hex}00`,
      "editorGroupHeader.tabsBackground": palette.crust.hex,
      "editorGroupHeader.tabsBorder": `${palette.crust.hex}00`,
      "tab.activeForeground": "#ffffff",
      "tab.border": `${palette.crust.hex}00`,
      "tab.activeBackground": palette.crust.hex,
      "tab.activeBorder": `${palette.crust.hex}00`,
      "tab.activeBorderTop": `${palette.crust.hex}00`,
      "tab.inactiveBackground": palette.crust.hex,
      "tab.inactiveForeground": "#757575",
      "tab.hoverBackground": `${palette.crust.hex}00`,
      "tab.hoverForeground": "#ffffff",
      "tab.hoverBorder": `${palette.crust.hex}00`,
      "scrollbarSlider.background": "#0000001e",
      "scrollbarSlider.hoverBackground": `${palette.crust.hex}22`,
      "scrollbarSlider.activeBackground": `${palette.crust.hex}38`,
      "progressBar.background": "#0971f1",
      "widget.shadow": "#0000005c",
      "editorWidget.foreground": "#cccccc",
      "editorWidget.background": palette.crust.hex,
      "editorWidget.resizeBorder": "#FFFFFF0A",
      "pickerGroup.border": `${palette.crust.hex}00`,
      "pickerGroup.foreground": "#e6e6e6",
      "debugToolBar.background": palette.crust.hex,
      "debugToolBar.border": "#FFFFFF0A",
      "notifications.foreground": "#cccccc",
      "notifications.background": palette.crust.hex,
      "notificationToast.border": "#FFFFFF0A",
      "notificationsErrorIcon.foreground": palette.red.hex,
      "notificationsWarningIcon.foreground": `${palette.red.hex}AA`,
      "notificationsInfoIcon.foreground": palette.sapphire.hex,
      "notificationCenter.border": "#FFFFFF0A",
      "notificationCenterHeader.foreground": "#cccccc",
      "notificationCenterHeader.background": palette.crust.hex,
      "notifications.border": "#FFFFFF0A",
      "gitDecoration.addedResourceForeground": palette.green.hex,
      "gitDecoration.conflictingResourceForeground": palette.mauve.hex,
      "gitDecoration.deletedResourceForeground": palette.red.hex,
      "gitDecoration.ignoredResourceForeground": "#8c8c8c",
      "gitDecoration.modifiedResourceForeground": palette.yellow.hex,
      "gitDecoration.stageDeletedResourceForeground": palette.red.hex,
      "gitDecoration.stageModifiedResourceForeground": palette.yellow.hex,
      "gitDecoration.submoduleResourceForeground": palette.blue.hex,
      "gitDecoration.untrackedResourceForeground": palette.green.hex,
      "editorMarkerNavigation.background": palette.crust.hex,
      "editorMarkerNavigationError.background": palette.maroon.hex,
      "editorMarkerNavigationWarning.background": palette.peach.hex,
      "editorMarkerNavigationInfo.background": palette.sapphire.hex,
      "merge.currentHeaderBackground": "#367366",
      "merge.currentContentBackground": "#27403B",
      "merge.incomingHeaderBackground": "#395F8F",
      "merge.incomingContentBackground": "#28384B",
      "merge.commonHeaderBackground": "#383838",
      "merge.commonContentBackground": "#282828",
      "editorSuggestWidget.background": palette.crust.hex,
      "editorSuggestWidget.border": "#FFFFFF0A",
      "editorSuggestWidget.foreground": "#cccccc",
      "editorSuggestWidget.highlightForeground": palette.mauve.hex,
      "editorSuggestWidget.selectedBackground": "#FFFFFF0A",
      "editorHoverWidget.foreground": "#cccccc",
      "editorHoverWidget.background": palette.crust.hex,
      "editorHoverWidget.border": "#FFFFFF0A",
      "peekView.border": "#343434",
      "peekViewEditor.background": "#FFFFFF0A",
      "peekViewEditorGutter.background": "#FFFFFF0A",
      "peekViewEditor.matchHighlightBackground": `${palette.mauve.hex}33`,
      "peekViewEditor.matchHighlightBorder": palette.mauve.hex,
      "peekViewResult.background": "#FFFFFF0A",
      "peekViewResult.fileForeground": "#ffffff",
      "peekViewResult.lineForeground": "#ffffff",
      "peekViewResult.matchHighlightBackground": `${palette.mauve.hex}33`,
      "peekViewResult.selectionBackground": "#FFFFFF0A",
      "peekViewResult.selectionForeground": "#ffffff",
      "peekViewTitle.background": "#FFFFFF0A",
      "peekViewTitleDescription.foreground": palette.mauve.hex,
      "peekViewTitleLabel.foreground": "#ffffff",
      "icon.foreground": "#cccccc",
      "checkbox.background": "#FFFFFF0A",
      "checkbox.foreground": "#ffffff",
      "checkbox.border": `${palette.crust.hex}00`,
      "dropdown.background": "#FFFFFF0A",
      "dropdown.foreground": "#ffffff",
      "dropdown.border": `${palette.crust.hex}00`,
      "minimapGutter.addedBackground": palette.green.hex,
      "minimapGutter.modifiedBackground": palette.blue.hex,
      "minimapGutter.deletedBackground": palette.red.hex,
      "minimap.findMatchHighlight": "#515c6a",
      "minimap.selectionHighlight": `${palette.mauve.hex}40`,
      "minimap.errorHighlight": palette.red.hex,
      "minimap.warningHighlight": `${palette.red.hex}AA`,
      "minimap.background": palette.crust.hex,
      "sideBar.dropBackground": palette.crust.hex,
      "editorGroup.emptyBackground": palette.crust.hex,
      "panelSection.border": "#ffffff08",
      "statusBarItem.activeBackground": "#FFFFFF25",
      "settings.headerForeground": "#cccccc",
      "settings.focusedRowBackground": "#ffffff07",
      "walkThrough.embeddedEditorBackground": `${palette.crust.hex}50`,
      "breadcrumb.activeSelectionForeground": "#e0e0e0",
      "editorGutter.commentRangeForeground": "#c5c5c5",
      "debugExceptionWidget.background": palette.crust.hex,
      "debugExceptionWidget.border": "#FFFFFF0A"
    },
    "tokenColors": [
      {
        "name": "unison punctuation",
        "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "haskell variable generic-type",
        "scope": "variable.other.generic-type.haskell",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "haskell storage type",
        "scope": "storage.type.haskell",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "support.variable.magic.python",
        "scope": "support.variable.magic.python",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "punctuation.separator.parameters.python",
        "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "variable.parameter.function.language.special.self.python",
        "scope": "variable.parameter.function.language.special.self.python",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "storage.modifier.lifetime.rust",
        "scope": "storage.modifier.lifetime.rust",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "support.function.std.rust",
        "scope": "support.function.std.rust",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "entity.name.lifetime.rust",
        "scope": "entity.name.lifetime.rust",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "variable.language.rust",
        "scope": "variable.language.rust",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "support.constant.edge",
        "scope": "support.constant.edge",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "regexp constant character-class",
        "scope": "constant.other.character-class.regexp",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "regexp operator.quantifier",
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "punctuation.definition",
        "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "Text",
        "scope": "variable.parameter.function",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Comment Markup Link",
        "scope": "comment markup.link",
        "settings": {
          "foreground": "#5c6370"
        }
      },
      {
        "name": "markup diff",
        "scope": "markup.changed.diff",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "diff",
        "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "inserted.diff",
        "scope": "markup.inserted.diff",
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "deleted.diff",
        "scope": "markup.deleted.diff",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "c++ function",
        "scope": "meta.function.c,meta.function.cpp",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "c++ block",
        "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "js/ts punctuation separator key-value",
        "scope": "punctuation.separator.key-value",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "js/ts import keyword",
        "scope": "keyword.operator.expression.import",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "math js/ts",
        "scope": "support.constant.math",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "math property js/ts",
        "scope": "support.constant.property.math",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "js/ts variable.other.constant",
        "scope": "variable.other.constant",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "java type",
        "scope": [
          "storage.type.annotation.java",
          "storage.type.object.array.java"
        ],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "java source",
        "scope": "source.java",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "java modifier.import",
        "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "java modifier.import",
        "scope": "meta.method.java",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "java modifier.import",
        "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "java instanceof",
        "scope": "keyword.operator.instanceof.java",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "java variable.name",
        "scope": "meta.definition.variable.name.java",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "operator logical",
        "scope": "keyword.operator.logical",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "operator bitwise",
        "scope": "keyword.operator.bitwise",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "operator channel",
        "scope": "keyword.operator.channel",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "support.constant.property-value.scss",
        "scope": "support.constant.property-value.scss,support.constant.property-value.css",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "CSS/SCSS/LESS Operators",
        "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "css color standard name",
        "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "css comma",
        "scope": "punctuation.separator.list.comma.css",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "css attribute-name.id",
        "scope": "support.constant.color.w3c-standard-color-name.css",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "css property-name",
        "scope": "support.type.vendored.property-name.css",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "js/ts module",
        "scope": "support.module.node,support.type.object.module,support.module.node",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "entity.name.type.module",
        "scope": "entity.name.type.module",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "js variable readwrite",
        "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "js/ts json",
        "scope": "support.constant.json",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "js/ts Keyword",
        "scope": [
          "keyword.operator.expression.instanceof",
          "keyword.operator.new",
          "keyword.operator.ternary",
          "keyword.operator.optional",
          "keyword.operator.expression.keyof"
        ],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "js/ts console",
        "scope": "support.type.object.console",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "js/ts support.variable.property.process",
        "scope": "support.variable.property.process",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "js console function",
        "scope": "entity.name.function,support.function.console",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "keyword.operator.misc.rust",
        "scope": "keyword.operator.misc.rust",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "keyword.operator.sigil.rust",
        "scope": "keyword.operator.sigil.rust",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "operator",
        "scope": "keyword.operator.delete",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "js dom",
        "scope": "support.type.object.dom",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "js dom variable",
        "scope": "support.variable.dom,support.variable.property.dom",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "keyword.operator",
        "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "C operator assignment",
        "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation.separator.delimiter",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Other punctuation .c",
        "scope": "punctuation.separator.c,punctuation.separator.cpp",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "C type posix-reserved",
        "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "keyword.operator.sizeof.c",
        "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "python parameter",
        "scope": "variable.parameter.function.language.python",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "python type",
        "scope": "support.type.python",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "python logical",
        "scope": "keyword.operator.logical.python",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "pyCs",
        "scope": "variable.parameter.function.python",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "python block",
        "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "python function-call.generic",
        "scope": "meta.function-call.generic.python",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "python placeholder reset to normal string",
        "scope": "constant.character.format.placeholder.other.python",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Operators",
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Compound Assignment Operators",
        "scope": "keyword.operator.assignment.compound",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Compound Assignment Operators js/ts",
        "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Keywords",
        "scope": "keyword",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Namespaces",
        "scope": "entity.name.namespace",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Variables",
        "scope": "variable",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Variables",
        "scope": "variable.c",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Language variables",
        "scope": "variable.language",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Java Variables",
        "scope": "token.variable.parameter.java",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Java Imports",
        "scope": "import.storage.java",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Packages",
        "scope": "token.package.keyword",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Packages",
        "scope": "token.package",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Functions",
        "scope": [
          "entity.name.function",
          "meta.require",
          "support.function.any-method",
          "variable.function"
        ],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Classes",
        "scope": "entity.name.type.namespace",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Classes",
        "scope": "support.class, entity.name.type.class",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Class name",
        "scope": "entity.name.class.identifier.namespace.type",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Class name",
        "scope": [
          "entity.name.class",
          "variable.other.class.js",
          "variable.other.class.ts"
        ],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Class name php",
        "scope": "variable.other.class.php",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Type Name",
        "scope": "entity.name.type",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Keyword Control",
        "scope": "keyword.control",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Control Elements",
        "scope": "control.elements, keyword.operator.less",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Methods",
        "scope": "keyword.other.special-method",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Storage JS TS",
        "scope": "token.storage",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
        "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Java Storage",
        "scope": "token.storage.type.java",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Support",
        "scope": "support.function",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Support type",
        "scope": "support.type.property-name",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Support type",
        "scope": "support.constant.property-value",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Support type",
        "scope": "support.constant.font-name",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Meta tag",
        "scope": "meta.tag",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Strings",
        "scope": "string",
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "Inherited Class",
        "scope": "entity.other.inherited-class",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Constant other symbol",
        "scope": "constant.other.symbol",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Integers",
        "scope": "constant.numeric",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Constants",
        "scope": "constant",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Constants",
        "scope": "punctuation.definition.constant",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Tags",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Attributes",
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Attribute IDs",
        "scope": "entity.other.attribute-name.id",
        "settings": {
          "fontStyle": "",
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Attribute class",
        "scope": "entity.other.attribute-name.class.css",
        "settings": {
          "fontStyle": "",
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Selector",
        "scope": "meta.selector",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Headings",
        "scope": "markup.heading",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Headings",
        "scope": "markup.heading punctuation.definition.heading, entity.name.section",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Units",
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Bold",
        "scope": "markup.bold,todo.bold",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "Bold",
        "scope": "punctuation.definition.bold",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "markup Italic",
        "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "emphasis md",
        "scope": "emphasis md",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown headings",
        "scope": "entity.name.section.markdown",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
        "scope": "punctuation.definition.heading.markdown",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "punctuation.definition.list.begin.markdown",
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown heading setext",
        "scope": "markup.heading.setext",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
        "scope": "punctuation.definition.bold.markdown",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
        "scope": "markup.inline.raw.markdown",
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
        "scope": "markup.inline.raw.string.markdown",
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
        "scope": "punctuation.definition.list.markdown",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
        "scope": [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "punctuation.definition.metadata.markdown"
        ],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "beginning.punctuation.definition.list.markdown",
        "scope": ["beginning.punctuation.definition.list.markdown"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
        "scope": "punctuation.definition.metadata.markdown",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
        "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
        "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Regular Expressions",
        "scope": "string.regexp",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Escape Characters",
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Embedded",
        "scope": "punctuation.section.embedded, variable.interpolation",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Embedded",
        "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "illegal",
        "scope": "invalid.illegal",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "illegal",
        "scope": "invalid.illegal.bad-ampersand.html",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Broken",
        "scope": "invalid.broken",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "Deprecated",
        "scope": "invalid.deprecated",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "Unimplemented",
        "scope": "invalid.unimplemented",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
        "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
        "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
        "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
        "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] JSON Property Name",
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
        "scope": "support.type.property-name.json punctuation",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "laravel blade tag",
        "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "laravel blade @",
        "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "use statement for other classes",
        "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "error suppression",
        "scope": "keyword.operator.error-control.php",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "php instanceof",
        "scope": "keyword.operator.type.php",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "style double quoted array index normal begin",
        "scope": "punctuation.section.array.begin.php",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "style double quoted array index normal end",
        "scope": "punctuation.section.array.end.php",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "php illegal.non-null-typehinted",
        "scope": "invalid.illegal.non-null-typehinted.php",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "name": "php types",
        "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "php call-function",
        "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "php function-resets",
        "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "support php constants",
        "scope": "support.constant.core.rust",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "support php constants",
        "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "php goto",
        "scope": "entity.name.goto-label.php,support.other.php",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "php logical/bitwise operator",
        "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "php regexp operator",
        "scope": "keyword.operator.regexp.php",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "php comparison",
        "scope": "keyword.operator.comparison.php",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "php heredoc/nowdoc",
        "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "python function decorator @",
        "scope": "meta.function.decorator.python",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "python function support",
        "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "parameter function js/ts",
        "scope": "function.parameter",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "brace function",
        "scope": "function.brace",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "parameter function ruby cs",
        "scope": "function.parameter.ruby, function.parameter.cs",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "constant.language.symbol.ruby",
        "scope": "constant.language.symbol.ruby",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "rgb-value",
        "scope": "rgb-value",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "rgb value",
        "scope": "inline-color-decoration rgb-value",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "rgb value less",
        "scope": "less rgb-value",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "sass selector",
        "scope": "selector.sass",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "ts primitive/builtin types",
        "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "block scope",
        "scope": "block.scope.end,block.scope.begin",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "cs storage type",
        "scope": "storage.type.cs",
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "cs local variable",
        "scope": "entity.name.variable.local.cs",
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "String interpolation",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Reset JavaScript string interpolation expression",
        "scope": ["meta.template.expression"],
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Import module JS",
        "scope": ["keyword.operator.module"],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "js Flowtype",
        "scope": ["support.type.type.flowtype"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "js Flow",
        "scope": ["support.type.primitive"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "js class prop",
        "scope": ["meta.property.object"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "js func parameter",
        "scope": ["variable.parameter.function.js"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "js template literals begin",
        "scope": ["keyword.other.template.begin"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "js template literals end",
        "scope": ["keyword.other.template.end"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "js template literals variable braces begin",
        "scope": ["keyword.other.substitution.begin"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "js template literals variable braces end",
        "scope": ["keyword.other.substitution.end"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "js operator.assignment",
        "scope": ["keyword.operator.assignment"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "go operator",
        "scope": ["keyword.operator.assignment.go"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "go operator",
        "scope": [
          "keyword.operator.arithmetic.go",
          "keyword.operator.address.go"
        ],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "Go package name",
        "scope": ["entity.name.package.go"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "elm prelude",
        "scope": ["support.type.prelude.elm"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "elm constant",
        "scope": ["support.constant.elm"],
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "template literal",
        "scope": ["punctuation.quasi.element"],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "html/pug (jade) escaped characters and entities",
        "scope": ["constant.character.entity"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
        "scope": [
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Clojure globals",
        "scope": ["entity.global.clojure"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Clojure symbols",
        "scope": ["meta.symbol.clojure"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Clojure constants",
        "scope": ["constant.keyword.clojure"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "CoffeeScript Function Argument",
        "scope": ["meta.arguments.coffee", "variable.parameter.function.coffee"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Ini Default Text",
        "scope": ["source.ini"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "Makefile prerequisities",
        "scope": ["meta.scope.prerequisites.makefile"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Makefile text colour",
        "scope": ["source.makefile"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Groovy import names",
        "scope": ["storage.modifier.import.groovy"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Groovy Methods",
        "scope": ["meta.method.groovy"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "Groovy Variables",
        "scope": ["meta.definition.variable.name.groovy"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "Groovy Inheritance",
        "scope": ["meta.definition.class.inherited.classes.groovy"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "HLSL Semantic",
        "scope": ["support.variable.semantic.hlsl"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "HLSL Types",
        "scope": [
          "support.type.texture.hlsl",
          "support.type.sampler.hlsl",
          "support.type.object.hlsl",
          "support.type.object.rw.hlsl",
          "support.type.fx.hlsl",
          "support.type.object.hlsl"
        ],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "SQL Variables",
        "scope": ["text.variable", "text.bracketed"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "types",
        "scope": ["support.type.swift", "support.type.vb.asp"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "heading 1, keyword",
        "scope": ["entity.name.function.xi"],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "heading 2, callable",
        "scope": ["entity.name.class.xi"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "heading 3, property",
        "scope": ["constant.character.character-class.regexp.xi"],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "heading 4, type, class, interface",
        "scope": ["constant.regexp.xi"],
        "settings": {
          "foreground": "#da68fb"
        }
      },
      {
        "name": "heading 5, enums, preprocessor, constant, decorator",
        "scope": ["keyword.control.xi"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "heading 6, number",
        "scope": ["invalid.xi"],
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "string",
        "scope": ["beginning.punctuation.definition.quote.markdown.xi"],
        "settings": {
          "foreground": "#68EDC6"
        }
      },
      {
        "name": "comments",
        "scope": ["beginning.punctuation.definition.list.markdown.xi"],
        "settings": {
          "foreground": "#5c6370"
        }
      },
      {
        "name": "link",
        "scope": ["constant.character.xi"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "accent",
        "scope": ["accent.xi"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "wikiword",
        "scope": ["wikiword.xi"],
        "settings": {
          "foreground": "#ACAFFF"
        }
      },
      {
        "name": "language operators like '+', '-' etc",
        "scope": ["constant.other.color.rgb-value.xi"],
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "elements to dim",
        "scope": ["punctuation.definition.tag.xi"],
        "settings": {
          "foreground": "#5c6370"
        }
      },
      {
        "name": "C++/C#",
        "scope": [
          "entity.name.label.cs",
          "entity.name.scope-resolution.function.call",
          "entity.name.scope-resolution.function.definition"
        ],
        "settings": {
          "foreground": "#00A6FB"
        }
      },
      {
        "name": "Markdown underscore-style headers",
        "scope": [
          "entity.name.label.cs",
          "markup.heading.setext.1.markdown",
          "markup.heading.setext.2.markdown"
        ],
        "settings": {
          "foreground": "#F88DAD"
        }
      },
      {
        "name": "meta.brace.square",
        "scope": [" meta.brace.square"],
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "name": "Comments",
        "scope": "comment, punctuation.definition.comment",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#5c6370"
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Quote",
        "scope": "markup.quote.markdown",
        "settings": {
          "foreground": "#5c6370"
        }
      },
      {
        "name": "punctuation.definition.block.sequence.item.yaml",
        "scope": "punctuation.definition.block.sequence.item.yaml",
        "settings": {
          "foreground": "#cccccc"
        }
      },
      {
        "scope": ["constant.language.symbol.elixir"],
        "settings": {
          "foreground": "#5cc9f5"
        }
      },
      {
        "name": "js/ts italic",
        "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "comment",
        "scope": "comment.line.double-slash,comment.block.documentation",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "Python Keyword Control",
        "scope": "keyword.control.import.python,keyword.control.flow.python",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "markup.italic.markdown",
        "scope": "markup.italic.markdown",
        "settings": {
          "fontStyle": "italic"
        }
      }
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
      "enumMember": {
        "foreground": palette.sky.hex
      },
      "variable.constant": {
        "foreground": palette.lavender.hex
      },
      "variable.defaultLibrary": {
        "foreground": palette.blue.hex
      }
    }
  }
}
