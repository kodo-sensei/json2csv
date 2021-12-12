import { IOptions } from '../interfaces/option.interface';

/**
 *
 * @param data
 * @returns
 */
export class Json2CSV {
  /**
   *
   * @param data
   * @param flatten
   * @returns
   */
  public static convert(
    data: any[],
    options: IOptions = {
      flatten: true,
      delimiter: '.',
    },
  ): string | undefined {
    if (data.length > 0) {
      let fields = Object.keys(data[0]);

      let replacer = (key: any, value: any) => {
        return value === null ? '' : value;
      };

      data.forEach((row) => {
        const keys = Object.keys(this.flattenObject(row));
        if (keys.length > fields.length) {
          fields = keys;
        }
      });

      let csv = data.map((row) => {
        row = this.flattenObject(row);
        return Array.from(fields)
          .map((fieldName) => {
            return JSON.stringify(row[fieldName], replacer);
          })
          .join(',');
      });

      csv.unshift(Array.from(fields).join(',')); // add header column
      return csv.join('\r\n');
    }
  }

  private keyGenerator(row: any, fields: any[], flatten: boolean = true): any[] {
    if (Object.keys(row).length > fields.length) {
      fields = Object.keys(row);
    }
    return fields;
  }

  /**
   *
   * @param ob
   * @returns
   */
  public static flattenObject(ob: any): any {
    let toReturn: any = {};
    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;
      if (typeof ob[i] == 'object' && ob[i] !== null) {
        var flatObject = this.flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  }
}
