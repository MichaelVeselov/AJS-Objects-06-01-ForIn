import orderByProps from '../app.js';

describe('function orderByProps should return', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const arr = ['name', 'level'];

  test('sorted by condition, then by alphabet', () => {
    const result = orderByProps(obj, arr);
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(result).toEqual(expected);
  });

  test('sorted by alphabet only', () => {
    const result = orderByProps(obj);
    const expected = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];
    expect(result).toEqual(expected);
  });
});
