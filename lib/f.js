/**
 * Define theme "f".
 * @function f
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends f */
function f(width, height, color) {

    var lineWidth = numcal.min(width, height) * 0.05;
    var r = numcal.min(height, width) * 0.2;

    return _svg(width, height, {
        rect: {
            '@': {
                x: lineWidth / 2,
                y: lineWidth / 2,
                width: width - lineWidth,
                height: height - lineWidth,
                rx: r,
                ry: r,
                fill: 'none',
                'stroke-width': lineWidth,
                stroke: color
            }
        }
    });
}

module.exports = f;