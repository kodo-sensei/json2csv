import converter from '../converter';

test('Test Json Conversion', () => {
  const data = [
    {
      name: 1,
    },
  ];
  //   console.log(converter(data));
  expect(converter(data)).toBe(`name\r\n1`);
});
