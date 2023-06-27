"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSV2Json = exports.Json2CSV = void 0;
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
            delimiter: '/',
        }; }
        if (data.length > 0) {
            var fields_1 = Object.keys(data[0]);
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
                    var value = row[fieldName];
                    if (value === null || value === undefined) {
                        return '';
                    }
                    else if (typeof value === 'string') {
                        // Escape any quotes within the string and wrap it in quotes
                        return "".concat(value.replace(/"/g, ''));
                    }
                    else {
                        // Just return the value as is, if it's not a string
                        return value;
                    }
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
var CSV2Json = /** @class */ (function () {
    function CSV2Json() {
    }
    CSV2Json.convert = function (csv, options) {
        if (options === void 0) { options = {
            delimiter: '/',
            flatten: true,
        }; }
        var lines = csv.split('\n');
        var headers = lines[0].split(',').map(function (h) { return h.trim(); });
        return lines.slice(1).reduce(function (jsonArray, line) {
            var data = line.split(',').map(function (field) { return field.trim(); });
            var obj = headers.reduce(function (result, header, index) {
                var headerParts = header.split(options.delimiter);
                headerParts.reduce(function (current, part, idx) {
                    if (idx === headerParts.length - 1) {
                        current[part] = data[index];
                    }
                    else {
                        current[part] = current[part] || {};
                    }
                    return current[part];
                }, result);
                return result;
            }, {});
            jsonArray.push(obj);
            return jsonArray;
        }, []);
    };
    return CSV2Json;
}());
exports.CSV2Json = CSV2Json;
