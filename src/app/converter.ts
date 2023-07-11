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
      delimiter: '/',
    },
  ): string | undefined {
    if (data.length > 0) {
      let fields = Object.keys(data[0]);

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
            const value = row[fieldName];
            if (value === null || value === undefined) {
              return '';
            } else if (typeof value === 'string') {
              // Escape any quotes within the string and wrap it in quotes
              return `${value.replace(/"/g, '')}`;
            } else {
              // Just return the value as is, if it's not a string
              return value;
            }
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

export class CSV2Json {
  public static convert(
    csv: string,
    options: IOptions = {
      delimiter: '/',
      flatten: true,
    },
  ) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map((h) => h.trim().replace(/"/g, ''));

    return lines.slice(1).reduce((jsonArray: any[], line: string) => {
      const data = line.split(',').map((field) => field.trim().replace(/"/g, '').replace(/\s+/g, ' '));

      const obj = headers.reduce((result: any, header: string, index: number) => {
        const headerParts = header.split(options.delimiter);

        headerParts.reduce((current, part, idx) => {
          if (idx === headerParts.length - 1) {
            current[part] = data[index];
          } else {
            current[part] = current[part] || {};
          }
          return current[part];
        }, result);

        return result;
      }, {});

      jsonArray.push(obj);
      return jsonArray;
    }, []);
  }
}
