import { Json2CSV } from '../app/converter';

test('Test Flat Json Conversion', () => {
  const data = [
    {
      name: 'Persius',
      email: 'persius@poseidon.com',
    },
  ];
  expect(Json2CSV.convert(data)).toBe(`name,email\r\n"Persius","persius@poseidon.com"`);
});

test('Test Json Conversion Nested object', () => {
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
  expect(Json2CSV.convert(data)).toBe(
    `name,email,metadata.gender,metadata.dob\r\n"Persius","persius@poseidon.com","god","10000 BC"`,
  );
});
