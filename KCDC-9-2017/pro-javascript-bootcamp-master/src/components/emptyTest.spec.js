// Must have at least one test file in this directory or Mocha will throw an error.
import {expect} from 'chai';

describe('our first test', () => {
    it('passes', () => {
        expect(1).to.equal(1);
    });
});