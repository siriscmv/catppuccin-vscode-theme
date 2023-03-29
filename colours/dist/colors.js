"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mocha = exports.macchiato = exports.frappe = exports.latte = exports.alphaBlend = exports.Color = void 0;
const color_1 = require("./color");
const palette_1 = require("@catppuccin/palette");
var color_2 = require("./color");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return color_2.Color; } });
Object.defineProperty(exports, "alphaBlend", { enumerable: true, get: function () { return color_2.alphaBlend; } });
exports.latte = generateTheme('latte');
exports.frappe = generateTheme('frappe');
exports.macchiato = generateTheme('macchiato');
exports.mocha = generateTheme('mocha');
function generateTheme(name) {
    const u = (0, color_1.default)(palette_1.variants[name].crust.hex);
    const e = (0, color_1.default)(palette_1.variants[name].mantle.hex);
    return {
        syntax: {
            tag: e(palette_1.variants[name].sky.hex),
            func: e(palette_1.variants[name].yellow.hex),
            entity: e(palette_1.variants[name].blue.hex),
            string: e(palette_1.variants[name].green.hex),
            regexp: e(palette_1.variants[name].teal.hex),
            markup: e(palette_1.variants[name].red.hex),
            keyword: e(palette_1.variants[name].peach.hex),
            special: e(palette_1.variants[name].rosewater.hex),
            comment: e(palette_1.variants[name].sapphire.hex).alpha(0.5),
            constant: e(palette_1.variants[name].mauve.hex),
            operator: e(palette_1.variants[name].pink.hex)
        },
        vcs: {
            added: e(palette_1.variants[name].green.hex),
            modified: e(palette_1.variants[name].blue.hex),
            removed: e(palette_1.variants[name].red.hex)
        },
        editor: {
            fg: e(palette_1.variants[name].text.hex),
            bg: e(palette_1.variants[name].base.hex),
            line: e(palette_1.variants[name].crust.hex),
            selection: {
                active: e(palette_1.variants[name].blue.hex).alpha(0.25),
                inactive: e(palette_1.variants[name].blue.hex).alpha(0.13)
            },
            findMatch: {
                active: e(palette_1.variants[name].overlay2.hex),
                inactive: e(palette_1.variants[name].overlay2.hex).alpha(0.4)
            },
            gutter: {
                active: e(palette_1.variants[name].subtext1.hex).alpha(0.8),
                normal: e(palette_1.variants[name].subtext1.hex).alpha(0.4)
            },
            indentGuide: {
                active: e(palette_1.variants[name].surface0.hex).alpha(0.35),
                normal: e(palette_1.variants[name].surface0.hex).alpha(0.18)
            }
        },
        ui: {
            fg: u(palette_1.variants[name].overlay0.hex),
            bg: u(palette_1.variants[name].mantle.hex),
            line: u(palette_1.variants[name].crust.hex),
            selection: {
                active: u(palette_1.variants[name].overlay2.hex).alpha(0.15),
                normal: u(palette_1.variants[name].overlay2.hex).alpha(0.12)
            },
            panel: {
                bg: u(palette_1.variants[name].mantle.hex),
                shadow: u(palette_1.variants[name].crust.hex).alpha(0.7)
            }
        },
        common: {
            accent: u(palette_1.variants[name].mauve.hex),
            error: u(palette_1.variants[name].red.hex)
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMsaURBQThDO0FBRTlDLGlDQUE0QztBQUFuQyw4RkFBQSxLQUFLLE9BQUE7QUFBRSxtR0FBQSxVQUFVLE9BQUE7QUFFYixRQUFBLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsUUFBQSxNQUFNLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLFFBQUEsU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxRQUFBLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUE2RDVDLFNBQVMsYUFBYSxDQUFFLElBQWdEO0lBQ3RFLE1BQU0sQ0FBQyxHQUFHLElBQUEsZUFBSyxFQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxHQUFHLElBQUEsZUFBSyxFQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTNDLE9BQU87UUFDTCxNQUFNLEVBQUU7WUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxNQUFNLEVBQUUs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