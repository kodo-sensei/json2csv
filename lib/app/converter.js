"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
/**
 *
 * @param final
 * @returns
 */
function convert(final, flatten) {
    if (flatten === void 0) { flatten = true; }
    if (final.length > 0) {
        var fields_1 = Object.keys(final[0]);
        var replacer_1 = function (key, value) {
            return value === null ? '' : value;
        };
        final.forEach(function (row) {
            if (Object.keys(row).length > fields_1.length) {
                fields_1 = Object.keys(row);
            }
        });
        var csv = final.map(function (row) {
            return Array.from(fields_1)
                .map(function (fieldName) {
                return JSON.stringify(row[fieldName], replacer_1);
            })
                .join(',');
        });
        csv.unshift(Array.from(fields_1).join(',')); // add header column
        return csv.join('\r\n');
    }
}
exports.convert = convert;
