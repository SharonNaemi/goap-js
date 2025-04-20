const { initialState, actions, goals } = require('./world.js');
const { plan } = require('./planner.js');

test('Should plan actions to achieve goal pickupHL(lp1,fp1)', () => {
  const result = plan(initialState, actions, goals["pickupHL(lp1,fp1)"]);
  console.log('Generated Plan:', result);

  expect(result).toContain("pickup(lp1,fp1)");
  expect(result.length).toBeGreaterThan(0);
});

