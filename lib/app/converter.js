"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json2CSV = void 0;
/**
 *
 * @param data
 * @returns
 */
var Json2CSV = /** @class */ (function () {
    function Json2CSV() {
    }
    /**
     *
     * @param data
     * @param flatten
     * @returns
     */
    Json2CSV.convert = function (data, options) {
        var _this = this;
        if (options === void 0) { options = {
            flatten: true,
            delimiter: '.',
        }; }
        if (data.length > 0) {
            var fields_1 = Object.keys(data[0]);
            var replacer_1 = function (key, value) {
                return value === null ? '' : value;
            };
            data.forEach(function (row) {
                var keys = Object.keys(_this.flattenObject(row));
                if (keys.length > fields_1.length) {
                    fields_1 = keys;
                }
            });
            var csv = data.map(function (row) {
                row = _this.flattenObject(row);
                return Array.from(fields_1)
                    .map(function (fieldName) {
                    return JSON.stringify(row[fieldName], replacer_1);
                })
                    .join(',');
            });
            csv.unshift(Array.from(fields_1).join(',')); // add header column
            return csv.join('\r\n');
        }
    };
    Json2CSV.prototype.keyGenerator = function (row, fields, flatten) {
        if (flatten === void 0) { flatten = true; }
        if (Object.keys(row).length > fields.length) {
            fields = Object.keys(row);
        }
        return fields;
    };
    /**
     *
     * @param ob
     * @returns
     */
    Json2CSV.flattenObject = function (ob) {
        var toReturn = {};
        for (var i in ob) {
            if (!ob.hasOwnProperty(i))
                continue;
            if (typeof ob[i] == 'object' && ob[i] !== null) {
                var flatObject = this.flattenObject(ob[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x))
                        continue;
                    toReturn[i + '.' + x] = flatObject[x];
                }
            }
            else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
    };
    return Json2CSV;
}());
exports.Json2CSV = Json2CSV;
