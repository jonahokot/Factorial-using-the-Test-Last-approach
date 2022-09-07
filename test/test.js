const { assert } = require('chai');
const { it } = require('mocha');
const factorialize = require('../factorial');

// eslint-disable-next-line no-undef
describe('factorial test', () => {
  it('Factorial 0', () => {
    assert.equal(factorialize(1), 1);
  });
  it('Factorial 1', () => {
    assert.equal(factorialize(0), 1);
  });
  it('Factorial 4', () => {
    assert.equal(factorialize(4), 24);
  });
  it('Factorial 5', () => {
    assert.equal(factorialize(5), 120);
  });
});
