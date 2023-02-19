const openOrSenior = require('./open_or_senior');


describe('Is Open or Senior:', () => {
  test('[[60,10],[72,8]] will be [Senior,Senior]', () => {
    const output = (["Senior", "Senior"])
    expect(openOrSenior([[60,10],[72,8]])).toEqual(output);
  });

  test('[[]] will be [Open]', () => {
    const output  = (["Open"])
    expect(openOrSenior([[]])).toEqual(output)
  })

  test('[] will be []', () => {
    const output  = ([])
    expect(openOrSenior([])).toEqual(output)
  })

  test('[[35,8],[67,1]] will be [Open]', () => {
    const output  = (["Open", "Open"])
    expect(openOrSenior([[35,8],[67,1]])).toEqual(output)
  })
});