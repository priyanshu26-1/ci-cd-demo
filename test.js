const test = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./app');

test('greeting works correctly', () => {
  assert.equal(greet('World'), 'Hello, World!');
});
