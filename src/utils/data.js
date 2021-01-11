const createData = (
  name,
  screen_name,
  followers_count,
  following_count,
  location,
  verified
) => {
  return {
    name,
    screen_name,
    followers_count,
    following_count,
    location,
    verified,
  };
};

export const TableData = [
  createData('Shubham Shinde', 'shindeshubhamm', 166, 178, 'Pune', true),
  createData('Clare Hays', 'clareHays', 120, 68, 'Eget, Ave', false),
  createData('Anjolie Beard', 'theDragon', 186, 163, 'Sit St.', false),
  createData('Helen Sweeney', 'sydneyrocks', 55, 229, 'Tincidunt Road', false),
  createData('Nell Lancaster', 'goinggood', 57, 112, 'Mauris Rd.', true),
  createData('Kenyon Morgan', 'callmekenyon', 124, 193, 'Neque St.', false),
  createData(
    'Stewart Ramos',
    'originalStewart',
    114,
    71,
    '5446 Fringilla St.',
    true
  ),
  createData('Lane Dawson', 'TheRealLane', 116, 185, 'Phasellus Street', true),
  createData('Tad Moses', 'TadIsTod', 85, 115, '861-4191 Semper Rd.', false),
  createData('Ralph Houston', 'RalphHouston23', 90, 77, 'Ultricies Rd.', true),
  createData(
    'Shaeleigh Conway',
    'ConwayTheWay',
    88,
    141,
    'Volutpat St.',
    false
  ),
];

export const listOfColumns = [
  {
    id: 'name',
    prettyName: 'Name',
  },
  {
    id: 'screen_name',
    prettyName: 'Screen Name',
  },
  {
    id: 'followers_count',
    prettyName: 'Followers Count',
  },
  {
    id: 'following_count',
    prettyName: 'Following Count',
  },
  {
    id: 'location',
    prettyName: 'Location',
  },
  {
    id: 'verified',
    prettyName: 'Verified',
  },
];
