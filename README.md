## How to Install

You can install json2csv as a dependency using NPM.
Requires Node v12 or higher.

```bash
# Global so it can be called from anywhere
$ npm install -g @kodo-sensei/json2csv
# or as a dependency of a project
$ npm install @kodo-sensei/json2csv --save
```

## Usage

```ts
import { convert } from '@kodo-sensei/json2csv';
import * as fs from 'fs';

fs.readFileSync('foo.txt', 'utf8');
const data = [
  {
    name: 'Persius',
    email: 'persius@poseidon.com',
  },
];
console.log(convert(data));
fs.writeFileSync(new URL(fileURL), data, { encoding: encoding });
```
