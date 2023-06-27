import { Json2CSV, CSV2Json } from '../app/converter';

test('Test flat json conversion', () => {
  const data = [
    {
      name: 'Persius',
      email: 'persius@poseidon.com',
    },
  ];
  expect(Json2CSV.convert(data)).toBe(`name,email\r\nPersius,persius@poseidon.com`);
});

test('Test json conversion nested object', () => {
  const data = [
    {
      name: 'Persius',
      email: 'persius@poseidon.com',
      metadata: {
        gender: 'god',
        dob: '10000 BC',
      },
    },
  ];
  expect(
    Json2CSV.convert(data, {
      delimiter: '.',
      flatten: false,
    }),
  ).toBe(`name,email,metadata.gender,metadata.dob\r\nPersius,persius@poseidon.com,god,10000 BC`);
});

test('Test flat CSV conversion', () => {
  const data = [
    {
      name: 'Persius',
      email: 'persius@poseidon.com',
    },
  ];
  const csv: string = `name,email\r\nPersius,persius@poseidon.com`;
  expect(CSV2Json.convert(csv)).toEqual(data);
});

test('Test json conversion nested object', () => {
  const data = [
    {
      name: 'Persius',
      email: 'persius@poseidon.com',
      metadata: {
        gender: 'god',
        dob: '10000 BC',
      },
    },
  ];
  const csv: string = `name,email,metadata/gender,metadata/dob\r\nPersius,persius@poseidon.com,god,10000 BC`;

  expect(
    CSV2Json.convert(csv, {
      delimiter: '/',
      flatten: false,
    }),
  ).toEqual(data);
});
