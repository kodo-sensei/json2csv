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

test('Test removal of quotes', () => {
  const data: any[] = [
    {
      Name: { first: 'William Macharia ' },
      'Mobile ': '254722928705',
      accountReference: 'RWL-001',
      accBalance: ' 2',
      currentReading: '776 ',
    },
    {
      Name: { first: 'Njau Peter Gachigi Njeru' },
      'Mobile ': '254713200223',
      accountReference: 'RWL-002',
      accBalance: ' 9',
      currentReading: '414 ',
    },
    {
      Name: { first: 'Gitau David' },
      'Mobile ': '254711986678',
      accountReference: 'RWL-003',
      accBalance: ' 2',
      currentReading: '503 ',
    },
    {
      Name: { first: 'Kibui Wairimu/Chege Ngugi - Main 2016111300' },
      'Mobile ': '254725402591',
      accountReference: 'RWL-005',
      accBalance: ' 1',
      currentReading: '481 ',
    },
    {
      Name: { first: 'Odolo Frederick (Lt Col)' },
      'Mobile ': '254722812750',
      accountReference: 'RWL-006',
      accBalance: ' 6',
      currentReading: '945 ',
    },
    {
      Name: { first: 'Newton (Kavuludi Johnson)' },
      'Mobile ': '254722552228',
      accountReference: 'RWL-007',
      accBalance: ' 6',
      currentReading: '602 ',
    },
    {
      Name: { first: 'Lilian Kajuju Mukoronia' },
      'Mobile ': '254722788810',
      accountReference: 'RWL-008',
      accBalance: ' 22',
      currentReading: '322 ',
    },
    {
      Name: { first: 'Muiyuro Theodore' },
      'Mobile ': '254721557874',
      accountReference: 'RWL-009',
      accBalance: ' (368)',
      currentReading: ' 61 ',
    },
    {
      Name: { first: 'Wahome Emmanuel ' },
      'Mobile ': '254727612186',
      accountReference: 'RWL-010',
      accBalance: ' 19',
      currentReading: '414 ',
    },
    {
      Name: { first: 'Ndiritu Wambui Eunice' },
      'Mobile ': '254722825586',
      accountReference: 'RWL-011',
      accBalance: ' 4',
      currentReading: '680 ',
    },
    {
      Name: { first: 'Mutea Joshua Mutwiri' },
      'Mobile ': '254722225897',
      accountReference: 'RWL-012',
      accBalance: ' (1',
      currentReading: '121)',
    },
    {
      Name: { first: 'Faith/Kiiru Muhia/(HumphreyKararwa)' },
      'Mobile ': '254721602138',
      accountReference: 'RWL-013',
      accBalance: '',
      currentReading: '',
    },
    {
      Name: { first: 'Njoroge Mary/Samuel A Obwaro' },
      'Mobile ': '254728803146',
      accountReference: 'RWL-014',
      accBalance: ' (18',
      currentReading: '217)',
    },
    {
      Name: { first: 'Onyango Jackton (Dr)' },
      'Mobile ': '254701301532',
      accountReference: 'RWL-015',
      accBalance: ' 1',
      currentReading: '393 ',
    },
    {
      Name: { first: 'Mwangi Timothy' },
      'Mobile ': '254729036373',
      accountReference: 'RWL-016',
      accBalance: ' 3',
      currentReading: '114 ',
    },
    {
      Name: { first: 'Karimi N Edward' },
      'Mobile ': '254724467290',
      accountReference: 'RWL-017',
      accBalance: ' 912 ',
      currentReading: ' 274 ',
    },
    {
      Name: { first: 'Karani Beatric Wanjiru' },
      'Mobile ': '254725263814',
      accountReference: 'RWL-018',
      accBalance: ' 1',
      currentReading: '371 ',
    },
    {
      Name: { first: 'Kirimi Elias' },
      'Mobile ': '254721805822',
      accountReference: 'RWL-019',
      accBalance: '',
      currentReading: '',
    },
    {
      Name: { first: 'Kirima Julius' },
      'Mobile ': '254722693581',
      accountReference: 'RWL-020',
      accBalance: ' 12',
      currentReading: '219 ',
    },
    {
      Name: { first: 'Orimbo Otieno Edwin' },
      'Mobile ': '254712720602',
      accountReference: 'RWL-021',
      accBalance: ' 7',
      currentReading: '749 ',
    },
    {
      Name: { first: 'Omae Malack' },
      'Mobile ': '254722805012',
      accountReference: 'RWL-022',
      accBalance: ' (75)',
      currentReading: ' 15 ',
    },
    {
      Name: { first: 'Nderitu Kamakia Peter' },
      'Mobile ': '254721518674',
      accountReference: 'RWL-023',
      accBalance: ' 32',
      currentReading: '963 ',
    },
    {
      Name: { first: 'Githinji Steven Muhindi' },
      'Mobile ': '254721251589',
      accountReference: 'RWL-024',
      accBalance: ' 5',
      currentReading: '063 ',
    },
    {
      Name: { first: 'Wairimu Miriam Ballenger' },
      'Mobile ': '254722862320',
      accountReference: 'RWL-025',
      accBalance: ' 56',
      currentReading: '251 ',
    },
    {
      Name: { first: 'Murandi Beatrice' },
      'Mobile ': '254723737943',
      accountReference: 'RWL-026',
      accBalance: ' 783 ',
      currentReading: ' 52 ',
    },
    {
      Name: { first: 'Njuguna Ann ' },
      'Mobile ': '254722556096',
      accountReference: 'RWL-027',
      accBalance: ' 833 ',
      currentReading: ' 57 ',
    },
    {
      Name: { first: 'Mwaura Peter' },
      'Mobile ': '254723151931',
      accountReference: 'RWL-028',
      accBalance: ' 358 ',
      currentReading: ' 12 ',
    },
    {
      Name: { first: 'Mwangi Evans' },
      'Mobile ': '254722711422',
      accountReference: 'RWL-029',
      accBalance: ' 2',
      currentReading: '065 ',
    },
    {
      Name: { first: 'Boniface Musyoki/Paul Njiha (Hinga)' },
      'Mobile ': '254725648309',
      accountReference: 'RWL-030',
      accBalance: ' 61',
      currentReading: '529 ',
    },
    {
      Name: { first: 'Ngatia Joy Mukami ' },
      'Mobile ': '254715272884',
      accountReference: 'RWL-031',
      accBalance: ' 35',
      currentReading: '911 ',
    },
    {
      Name: { first: 'Mwenje Njeri Joan' },
      'Mobile ': '254722633273',
      accountReference: 'RWL-032',
      accBalance: ' 8',
      currentReading: '209 ',
    },
    {
      Name: { first: 'Kinyanjui Edward ' },
      'Mobile ': '254720364638',
      accountReference: 'RWL-033',
      accBalance: ' 578 ',
      currentReading: ' 189 ',
    },
    {
      Name: { first: 'Kuria Nafula Elizabeth' },
      'Mobile ': '245721433619',
      accountReference: 'RWL-035',
      accBalance: ' 561 ',
      currentReading: '',
    },
    {
      Name: { first: 'Salim Saleh' },
      'Mobile ': '254722912580',
      accountReference: 'RWL-036',
      accBalance: ' 5',
      currentReading: '547 ',
    },
    {
      Name: { first: 'Eng Kamande Gaguchwa Paul' },
      'Mobile ': '254718126983',
      accountReference: 'RWL-038',
      accBalance: ' 12',
      currentReading: '277 ',
    },
    {
      Name: { first: 'Njenga Samuel' },
      'Mobile ': '254722962627',
      accountReference: 'RWL-039',
      accBalance: ' (28',
      currentReading: '003)',
    },
    {
      Name: { first: 'Ilaria Irene' },
      'Mobile ': '254722807831',
      accountReference: 'RWL-040',
      accBalance: ' 1',
      currentReading: '442 ',
    },
    {
      Name: { first: 'Anne Kariuki/Kibe Kariuki Bernard' },
      'Mobile ': '254722791908',
      accountReference: 'RWL-041',
      accBalance: ' 1',
      currentReading: '757 ',
    },
    {
      Name: { first: 'Gitau Regina Wanjiru' },
      'Mobile ': '254705172155',
      accountReference: 'RWL-042',
      accBalance: ' (2)',
      currentReading: ' 243 ',
    },
    {
      Name: { first: 'Odoyo Kathryn Anyango' },
      'Mobile ': '254712686850',
      accountReference: 'RWL-043',
      accBalance: ' (131)',
      currentReading: ' 3 ',
    },
    {
      Name: { first: 'Wamathai Evah /Njoroge Robert' },
      'Mobile ': '254723814540',
      accountReference: 'RWL-044',
      accBalance: ' (1)',
      currentReading: ' 64 ',
    },
    {
      Name: { first: 'Murage Mwaniki Johnson' },
      'Mobile ': '254729675982',
      accountReference: 'RWL-045',
      accBalance: '0',
      currentReading: '0',
    },
    {
      Name: { first: 'Mugo James Muratha' },
      'Mobile ': '254724651850',
      accountReference: 'RWL-046',
      accBalance: ' 10',
      currentReading: '732 ',
    },
    {
      Name: { first: 'Catherine Waithera Mburu' },
      'Mobile ': '254712006198',
      accountReference: 'RWL-047',
      accBalance: ' 3',
      currentReading: '549 ',
    },
    {
      Name: { first: 'Muchunu Joyce Wangui/Muruiki Eustace' },
      'Mobile ': '254733700831',
      accountReference: 'RWL-048',
      accBalance: ' 39',
      currentReading: '189 ',
    },
    {
      Name: { first: 'James Munene' },
      'Mobile ': '254722524791',
      accountReference: 'RWL-049',
      accBalance: ' 5',
      currentReading: '980 ',
    },
    {
      Name: { first: 'Ndubai Simon' },
      'Mobile ': '254722460932',
      accountReference: 'RWL-050',
      accBalance: ' 20',
      currentReading: '959 ',
    },
    {
      Name: { first: 'Mutua Joseph Muthusi (PS)' },
      'Mobile ': '254722813095',
      accountReference: 'RWL-051',
      accBalance: ' 131 ',
      currentReading: ' 4 ',
    },
    {
      Name: { first: 'Mwakughu Noel' },
      'Mobile ': '254722717799',
      accountReference: 'RWL-052',
      accBalance: ' 77',
      currentReading: '177 ',
    },
    {
      Name: { first: 'Muthoni Petronilla' },
      'Mobile ': '254722388900',
      accountReference: 'RWL-053',
      accBalance: ' 684 ',
      currentReading: ' 105 ',
    },
    {
      Name: { first: 'Sammy Kiare' },
      'Mobile ': '254707464671',
      accountReference: 'RWL-054',
      accBalance: ' (8',
      currentReading: '625)',
    },
    {
      Name: { first: 'Ngunjiri Tabitha Nyakio' },
      'Mobile ': '254721262141',
      accountReference: 'RWL-055',
      accBalance: ' (1',
      currentReading: '617)',
    },
    {
      Name: { first: 'Waudo Anne' },
      'Mobile ': '254721665166',
      accountReference: 'RWL-056',
      accBalance: ' 12',
      currentReading: '424 ',
    },
    {
      Name: { first: "Ng'ang'a Jane Wangu" },
      'Mobile ': '254722843109',
      accountReference: 'RWL-057',
      accBalance: ' (226)',
      currentReading: ' 84 ',
    },
    {
      Name: { first: 'Maina Cyrus' },
      'Mobile ': '254720700497',
      accountReference: 'RWL-058',
      accBalance: ' (4',
      currentReading: '468)',
    },
    {
      Name: { first: 'Macharia Catherine/Sandra ' },
      'Mobile ': '254724565441',
      accountReference: 'RWL-059',
      accBalance: ' (6',
      currentReading: '668)',
    },
    {
      Name: { first: 'Wachira Philip (Ndirangu Mark)' },
      'Mobile ': '254722759134',
      accountReference: 'RWL-060',
      accBalance: ' 31',
      currentReading: '221 ',
    },
    {
      Name: { first: 'Mwangi Peter ' },
      'Mobile ': '254720364143',
      accountReference: 'RWL-061',
      accBalance: ' 5',
      currentReading: '487 ',
    },
    {
      Name: { first: 'Hungi Florence' },
      'Mobile ': '254721637542',
      accountReference: 'RWL-062',
      accBalance: ' 3',
      currentReading: '489 ',
    },
    {
      Name: { first: 'Mwera Linyonyi Albert' },
      'Mobile ': '254711941966',
      accountReference: 'RWL-063',
      accBalance: ' 13',
      currentReading: '288 ',
    },
    {
      Name: { first: 'Linge Mathews' },
      'Mobile ': '254721237960',
      accountReference: 'RWL-064',
      accBalance: ' 120 ',
      currentReading: ' 486 ',
    },
    {
      Name: { first: 'Mwaura Harrison Kinyanjui' },
      'Mobile ': '254722515306',
      accountReference: 'RWL-065',
      accBalance: ' 5',
      currentReading: '351 ',
    },
    {
      Name: { first: 'Gilbert Njoroge Mbugwa/Mwangi Paul' },
      'Mobile ': '254745171319',
      accountReference: 'RWL-066',
      accBalance: ' 0 ',
      currentReading: ' 67 ',
    },
    {
      Name: { first: 'Kithinji Harry Albert' },
      'Mobile ': '254722261858',
      accountReference: 'RWL-067',
      accBalance: ' 0 ',
      currentReading: ' 41 ',
    },
    {
      Name: { first: 'Kinyanjui Jennifer Njuguna/Joseph - Main' },
      'Mobile ': '254723840566',
      accountReference: 'RWL-068',
      accBalance: ' 2',
      currentReading: '372 ',
    },
    {
      Name: { first: 'Kinyanjui Jennifer Njuguna/Joseph - DSQ' },
      'Mobile ': '254723840566',
      accountReference: 'RWL-069',
      accBalance: ' 3',
      currentReading: '354 ',
    },
    {
      Name: { first: 'Muchunu Joyce Wangui/Muruiki Eustace' },
      'Mobile ': '254714356990',
      accountReference: 'RWL-070',
      accBalance: ' 8',
      currentReading: '160 ',
    },
    {
      Name: { first: 'Ngaru Peninah ' },
      'Mobile ': '254713123985',
      accountReference: 'RWL-071',
      accBalance: ' 2',
      currentReading: '519 ',
    },
    {
      Name: { first: 'Muriithi Moses' },
      'Mobile ': '254722872187',
      accountReference: 'RWL-072',
      accBalance: ' 2',
      currentReading: '132 ',
    },
    {
      Name: { first: 'Mwasiaji Evans' },
      'Mobile ': '254711166553',
      accountReference: 'RWL-073',
      accBalance: ' (155)',
      currentReading: ' 128 ',
    },
    {
      Name: { first: "Ng'ang'a Antony" },
      'Mobile ': '254722777836',
      accountReference: 'RWL-074',
      accBalance: ' 2',
      currentReading: '230 ',
    },
    {
      Name: { first: 'Ndungu George' },
      'Mobile ': '254722300594',
      accountReference: 'RWL-075',
      accBalance: ' 48',
      currentReading: '212 ',
    },
    {
      Name: { first: 'Nyanducha Edwin' },
      'Mobile ': '254713136536',
      accountReference: 'RWL-076',
      accBalance: ' (437)',
      currentReading: ' 38 ',
    },
    {
      Name: { first: '' },
      'Mobile ': '',
      accountReference: 'RWL-077',
      accBalance: '',
      currentReading: '',
    },
    {
      Name: { first: 'Ngumu Titus' },
      'Mobile ': '254715497157',
      accountReference: 'RWL-078',
      accBalance: ' 7',
      currentReading: '691 ',
    },
    {
      Name: { first: 'Christine Maina/Paragon Ltd' },
      'Mobile ': '254725210357',
      accountReference: 'RWL-079',
      accBalance: ' (6',
      currentReading: '575)',
    },
    {
      Name: { first: 'Mutunga Daniel ' },
      'Mobile ': '254727637172',
      accountReference: 'RWL-080',
      accBalance: ' 2',
      currentReading: '629 ',
    },
    {
      Name: { first: 'Gachungi George Macharia' },
      'Mobile ': '254722747237',
      accountReference: 'RWL-081',
      accBalance: ' (108)',
      currentReading: ' 119 ',
    },
    {
      Name: { first: 'Mbari Nguyai Philip' },
      'Mobile ': '254721321755',
      accountReference: 'RWL-082',
      accBalance: ' 733 ',
      currentReading: ' 32 ',
    },
    {
      Name: { first: 'Makworo Micah ' },
      'Mobile ': '254721521118',
      accountReference: 'RWL-083',
      accBalance: '0',
      currentReading: ' 7 ',
    },
    {
      Name: { first: 'Gathuku Nancy' },
      'Mobile ': '254722719419',
      accountReference: 'RWL-084',
      accBalance: ' (165)',
      currentReading: ' 102 ',
    },
    {
      Name: { first: 'Karanja Kiboi' },
      'Mobile ': '254722149949',
      accountReference: 'RWL-085',
      accBalance: ' 227 ',
      currentReading: ' 47 ',
    },
    {
      Name: { first: 'Kamau Kariuki Peter' },
      'Mobile ': '254723448272',
      accountReference: 'RWL-086',
      accBalance: ' 783 ',
      currentReading: ' 195 ',
    },
    {
      Name: { first: 'Wanjohi (Mwangi Edward Maina) ' },
      'Mobile ': '254728104215',
      accountReference: 'RWL-087',
      accBalance: ' 8',
      currentReading: '413 ',
    },
    {
      Name: { first: 'Inoti Kiende Judith' },
      'Mobile ': '254722860928',
      accountReference: 'RWL-088',
      accBalance: ' 72 ',
      currentReading: ' 15 ',
    },
    {
      Name: { first: 'Nyangweso Lucas' },
      'Mobile ': '254721818110',
      accountReference: 'RWL-089',
      accBalance: ' 6',
      currentReading: '480 ',
    },
    {
      Name: { first: 'Kimaiyo Maurice ' },
      'Mobile ': '254720110954',
      accountReference: 'RWL-090',
      accBalance: ' 6',
      currentReading: '143 ',
    },
    {
      Name: { first: 'Kirima Araigua Francis' },
      'Mobile ': '254722647342',
      accountReference: 'RWL-091',
      accBalance: ' 7',
      currentReading: '707 ',
    },
    {
      Name: { first: 'Nyambeki Holdings (Monica Otieno)' },
      'Mobile ': '254722671722',
      accountReference: 'RWL-092',
      accBalance: ' (1',
      currentReading: '247)',
    },
    {
      Name: { first: 'Njuru Kariuki Stanley' },
      'Mobile ': '254722803516',
      accountReference: 'RWL-093',
      accBalance: ' (2',
      currentReading: '732)',
    },
    {
      Name: { first: 'Kombo Enock — MANUAL ' },
      'Mobile ': '254720793674',
      accountReference: 'RWL-094',
      accBalance: ' 10',
      currentReading: '508 ',
    },
    {
      Name: { first: 'Karuma Karuma Francis' },
      'Mobile ': '254722758667',
      accountReference: 'RWL-095',
      accBalance: ' 970 ',
      currentReading: ' 274 ',
    },
    {
      Name: { first: 'Thuita Francis alias Irungu Ruhahi' },
      'Mobile ': '254722517378',
      accountReference: 'RWL-096',
      accBalance: '0',
      currentReading: ' 50 ',
    },
    {
      Name: { first: 'Mworia Maitima Joseph' },
      'Mobile ': '254700559905',
      accountReference: 'RWL-097',
      accBalance: ' 9',
      currentReading: '161 ',
    },
    {
      Name: { first: 'Peter Muraguri James' },
      'Mobile ': '254721470536',
      accountReference: 'RWL-098',
      accBalance: ' 24',
      currentReading: '587 ',
    },
    {
      Name: { first: 'Muchiri Maranga Nancy' },
      'Mobile ': '254720801403',
      accountReference: 'RWL-099',
      accBalance: ' 13',
      currentReading: '314 ',
    },
    {
      Name: { first: 'Kingori Neilias' },
      'Mobile ': '254721679952',
      accountReference: 'RWL-100',
      accBalance: ' (7',
      currentReading: '273)',
    },
    {
      Name: { first: 'Grace Muchemi/Julius Ng’anga' },
      'Mobile ': '254723786719',
      accountReference: 'RWL-101',
      accBalance: ' 15',
      currentReading: '332 ',
    },
    {
      Name: { first: '' },
      'Mobile ': '',
      accountReference: 'RWL-102',
      accBalance: '',
      currentReading: '',
    },
    {
      Name: { first: 'Theuri Jonah/Kariuki Kariobangi' },
      'Mobile ': '254722893655',
      accountReference: 'RWL-103',
      accBalance: ' 81',
      currentReading: '215 ',
    },
  ];

  const csv: string = `"Name/first","Mobile ","accountReference","accBalance","currentReading"
  "William Macharia ","254722928705","RWL-001","  2,776 ","  369 "
  "Njau Peter Gachigi Njeru","254713200223","RWL-002","  9,414 ","  367 "
  "Gitau David","254711986678","RWL-003","  2,503 ","  1,308 "
  "Kibui Wairimu/Chege Ngugi - Main 2016111300","254725402591","RWL-005","  1,481 ","  861 "
  "Odolo Frederick (Lt Col)","254722812750","RWL-006","  6,945 ","  368 "
  "Newton (Kavuludi Johnson)","254722552228","RWL-007","  6,602 ","  391 "
  "Lilian Kajuju Mukoronia","254722788810","RWL-008","  22,322 ","  995 "
  "Muiyuro Theodore","254721557874","RWL-009","  (368)","  61 "
  "Wahome Emmanuel ","254727612186","RWL-010","  19,414 ","  525 "
  "Ndiritu Wambui Eunice","254722825586","RWL-011","  4,680 ","  446 "
  "Mutea Joshua Mutwiri","254722225897","RWL-012","  (1,121)","  188 "
  "Faith/Kiiru Muhia/(HumphreyKararwa)","254721602138","RWL-013","",""
  "Njoroge Mary/Samuel A Obwaro","254728803146","RWL-014","  (18,217)","  2,035 "
  "Onyango Jackton (Dr)","254701301532","RWL-015","  1,393 ","  464 "
  "Mwangi Timothy","254729036373","RWL-016","  3,114 ","  620 "
  "Karimi N Edward","254724467290","RWL-017","  912 ","  274 "
  "Karani Beatric Wanjiru","254725263814","RWL-018","  1,371 ","  455 "
  "Kirimi Elias","254721805822","RWL-019","",""
  "Kirima Julius","254722693581","RWL-020","  12,219 ","  442 "
  "Orimbo Otieno Edwin","254712720602","RWL-021","  7,749 ","  277 "
  "Omae Malack","254722805012","RWL-022","  (75)","  15 "
  "Nderitu Kamakia Peter","254721518674","RWL-023","  32,963 ",""
  "Githinji Steven Muhindi","254721251589","RWL-024","  5,063 ","  284 "
  "Wairimu Miriam Ballenger","254722862320","RWL-025","  56,251 ","  772 "
  "Murandi Beatrice","254723737943","RWL-026","  783 ","  52 "
  "Njuguna Ann ","254722556096","RWL-027","  833 ","  57 "
  "Mwaura Peter","254723151931","RWL-028","  358 ","  12 "
  "Mwangi Evans","254722711422","RWL-029","  2,065 ","  204 "
  "Boniface Musyoki/Paul Njiha (Hinga)","254725648309","RWL-030","  61,529 ","  692 "
  "Ngatia Joy Mukami ","254715272884","RWL-031","  35,911 ","  309 "
  "Mwenje Njeri Joan","254722633273","RWL-032","  8,209 ","  246 "
  "Kinyanjui Edward ","254720364638","RWL-033","  578 ","  189 "
  "Kuria Nafula Elizabeth","245721433619","RWL-035","  561 ",""
  "Salim Saleh","254722912580","RWL-036","  5,547 ","  229 "
  "Eng Kamande Gaguchwa Paul","254718126983","RWL-038","  12,277 ","  227 "
  "Njenga Samuel","254722962627","RWL-039","  (28,003)",""
  "Ilaria Irene","254722807831","RWL-040","  1,442 ","  281 "
  "Anne Kariuki/Kibe Kariuki Bernard","254722791908","RWL-041","  1,757 ","  93 "
  "Gitau Regina Wanjiru","254705172155","RWL-042","  (2)","  243 "
  "Odoyo Kathryn Anyango","254712686850","RWL-043","  (131)","  3 "
  "Wamathai Evah /Njoroge Robert","254723814540","RWL-044","  (1)","  64 "
  "Murage Mwaniki Johnson","254729675982","RWL-045","0","0"
  "Mugo James Muratha","254724651850","RWL-046","  10,732 ","  287 "
  "Catherine Waithera Mburu","254712006198","RWL-047","  3,549 ","  691 "
  "Muchunu Joyce Wangui/Muruiki Eustace","254733700831","RWL-048","  39,189 ","  1,538 "
  "James Munene","254722524791","RWL-049","  5,980 ","  120 "
  "Ndubai Simon","254722460932","RWL-050","  20,959 ","  532 "
  "Mutua Joseph Muthusi (PS)","254722813095","RWL-051","  131 ","  4 "
  "Mwakughu Noel","254722717799","RWL-052","  77,177 ","  2,046 "
  "Muthoni Petronilla","254722388900","RWL-053","  684 ","  105 "
  "Sammy Kiare","254707464671","RWL-054","  (8,625)","  376 "
  "Ngunjiri Tabitha Nyakio","254721262141","RWL-055","  (1,617)","  356 "
  "Waudo Anne","254721665166","RWL-056","  12,424 ","  411 "
  "Ng'ang'a Jane Wangu","254722843109","RWL-057","  (226)","  84 "
  "Maina Cyrus","254720700497","RWL-058","  (4,468)","  333 "
  "Macharia Catherine/Sandra ","254724565441","RWL-059","  (6,668)","  283 "
  "Wachira Philip (Ndirangu Mark)","254722759134","RWL-060","  31,221 ","  1,720 "
  "Mwangi Peter ","254720364143","RWL-061","  5,487 ","  201 "
  "Hungi Florence","254721637542","RWL-062","  3,489 ","  338 "
  "Mwera Linyonyi Albert","254711941966","RWL-063","  13,288 ","  105 "
  "Linge Mathews","254721237960","RWL-064","  120 ","  486 "
  "Mwaura Harrison Kinyanjui","254722515306","RWL-065","  5,351 ","  114 "
  "Gilbert Njoroge Mbugwa/Mwangi Paul","254745171319","RWL-066","  0 ","  67 "
  "Kithinji Harry Albert","254722261858","RWL-067","  0 ","  41 "
  "Kinyanjui Jennifer Njuguna/Joseph - Main","254723840566","RWL-068","  2,372 ","  179 "
  "Kinyanjui Jennifer Njuguna/Joseph -  DSQ","254723840566","RWL-069","  3,354 ","  130 "
  "Muchunu Joyce Wangui/Muruiki Eustace","254714356990","RWL-070","  8,160 ","  290 "
  "Ngaru Peninah ","254713123985","RWL-071","  2,519 ","  254 "
  "Muriithi Moses","254722872187","RWL-072","  2,132 ","  22 "
  "Mwasiaji Evans","254711166553","RWL-073","  (155)","  128 "
  "Ng'ang'a Antony","254722777836","RWL-074","  2,230 ","  588 "
  "Ndungu George","254722300594","RWL-075","  48,212 ","  1,577 "
  "Nyanducha Edwin","254713136536","RWL-076","  (437)","  38 "
  "","","RWL-077","",""
  "Ngumu Titus","254715497157","RWL-078","  7,691 ","  535 "
  "Christine Maina/Paragon Ltd","254725210357","RWL-079","  (6,575)","  835 "
  "Mutunga Daniel ","254727637172","RWL-080","  2,629 ","  63 "
  "Gachungi George Macharia","254722747237","RWL-081","  (108)","  119 "
  "Mbari Nguyai Philip","254721321755","RWL-082","  733 ","  32 "
  "Makworo Micah ","254721521118","RWL-083","0","  7 "
  "Gathuku Nancy","254722719419","RWL-084","  (165)","  102 "
  "Karanja Kiboi","254722149949","RWL-085","  227 ","  47 "
  "Kamau Kariuki Peter","254723448272","RWL-086","  783 ","  195 "
  "Wanjohi (Mwangi Edward Maina) ","254728104215","RWL-087","  8,413 ","  865 "
  "Inoti Kiende Judith","254722860928","RWL-088","  72 ","  15 "
  "Nyangweso Lucas","254721818110","RWL-089","  6,480 ","  167 "
  "Kimaiyo Maurice ","254720110954","RWL-090","  6,143 ","  473 "
  "Kirima Araigua Francis","254722647342","RWL-091","  7,707 ","  1,464 "
  "Nyambeki Holdings (Monica Otieno)","254722671722","RWL-092","  (1,247)","  912 "
  "Njuru Kariuki Stanley","254722803516","RWL-093","  (2,732)","  275 "
  "Kombo Enock — MANUAL ","254720793674","RWL-094","  10,508 ","  60 "
  "Karuma Karuma Francis","254722758667","RWL-095","  970 ","  274 "
  "Thuita Francis alias Irungu Ruhahi","254722517378","RWL-096","0","  50 "
  "Mworia Maitima Joseph","254700559905","RWL-097","  9,161 ","  233 "
  "Peter Muraguri James","254721470536","RWL-098","  24,587 ","  606 "
  "Muchiri Maranga Nancy","254720801403","RWL-099","  13,314 ","  848 "
  "Kingori Neilias","254721679952","RWL-100","  (7,273)","  1,341 "
  "Grace Muchemi/Julius Ng’anga","254723786719","RWL-101","  15,332 ","  503 "
  "","","RWL-102","",""
  "Theuri Jonah/Kariuki Kariobangi","254722893655","RWL-103","  81,215 ","  459 "`
  
  expect(
    CSV2Json.convert(csv, {
      delimiter: '/',
      flatten: false,
    }),
  ).toEqual(data);
});
