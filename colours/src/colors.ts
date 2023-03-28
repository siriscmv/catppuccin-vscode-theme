import color, { Color } from './color'
import { variants } from '@catppuccin/palette'

export { Color, alphaBlend } from './color';

export const latte = generateTheme('latte');
export const frappe = generateTheme('frappe');
export const macchiato = generateTheme('macchiato');
export const mocha = generateTheme('mocha');

export type Scheme = {
  syntax: {
    tag: Color
    func: Color
    entity: Color
    string: Color
    regexp: Color
    markup: Color
    keyword: Color
    special: Color
    comment: Color
    constant: Color
    operator: Color
  }
  vcs: {
    added: Color
    modified: Color
    removed: Color
  }
  editor: {
    fg: Color
    bg: Color
    line: Color
    selection: {
      active: Color
      inactive: Color
    }
    findMatch: {
      active: Color
      inactive: Color
    }
    gutter: {
      active: Color
      normal: Color
    }
    indentGuide: {
      active: Color
      normal: Color
    }
  }
  ui: {
    fg: Color
    bg: Color
    line: Color
    selection: {
      active: Color
      normal: Color
    }
    panel: {
      bg: Color
      shadow: Color
    }
  }
  common: {
    accent: Color
    error: Color
  }
};

function generateTheme (name: 'latte' | 'frappe' | 'macchiato' | 'mocha') {
  const u = color(variants[name].crust.hex);
  const e = color(variants[name].mantle.hex);

  return {
    syntax: {
      tag: e(variants[name].sky.hex),
      func: e(variants[name].yellow.hex),
      entity: e(variants[name].blue.hex),
      string: e(variants[name].green.hex),
      regexp: e(variants[name].teal.hex),
      markup: e(variants[name].red.hex),
      keyword: e(variants[name].peach.hex),
      special: e(variants[name].rosewater.hex),
      comment: e(variants[name].sapphire.hex).alpha(0.5),
      constant: e(variants[name].mauve.hex),
      operator: e(variants[name].pink.hex)
    },
    vcs: {
      added: e(variants[name].green.hex),
      modified: e(variants[name].blue.hex),
      removed: e(variants[name].red.hex)
    },
    editor: {
      fg: e(variants[name].text.hex),
      bg: e(variants[name].base.hex),
      line: e(variants[name].crust.hex),
      selection: {
        active: e(variants[name].blue.hex).alpha(0.25),
        inactive: e(variants[name].blue.hex).alpha(0.13)
      },
      findMatch: {
        active: e(variants[name].overlay2.hex),
        inactive: e(variants[name].overlay2.hex).alpha(0.4)
      },
      gutter: {
        active: e(variants[name].subtext1.hex).alpha(0.8),
        normal: e(variants[name].subtext1.hex).alpha(0.4)
      },
      indentGuide: {
        active: e(variants[name].surface0.hex).alpha(0.35),
        normal: e(variants[name].surface0.hex).alpha(0.18)
      }
    },
    ui: {
      fg: u(variants[name].overlay0.hex),
      bg: u(variants[name].mantle.hex),
      line: u(variants[name].crust.hex),
      selection: {
        active: u(variants[name].overlay2.hex).alpha(0.15),
        normal: u(variants[name].overlay2.hex).alpha(0.12)
      },
      panel: {
        bg: u(variants[name].mantle.hex),
        shadow: u(variants[name].crust.hex).alpha(0.7)
      }
    },
    common: {
      accent: u(variants[name].mauve.hex),
      error: u(variants[name].red.hex)
    }
  } satisfies Scheme ;
}
