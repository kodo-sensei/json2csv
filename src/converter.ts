/**
 *
 * @param final
 * @returns
 */
export default function convert(final: any[]): string | undefined {
  if (final.length > 0) {
    let fields = Object.keys(final[0]);
    let replacer = (key: any, value: any) => {
      return value === null ? "" : value;
    };

    final.forEach((row) => {
      if (Object.keys(row).length > fields.length) {
        fields = Object.keys(row);
      }
    });

    let csv = final.map((row) => {
      return Array.from(fields)
        .map((fieldName) => {
          return JSON.stringify(row[fieldName], replacer);
        })
        .join(",");
    });

    csv.unshift(Array.from(fields).join(",")); // add header column
    return csv.join("\r\n");
  }
}
