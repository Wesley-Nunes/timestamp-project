import assert from 'node:assert';
import { it, describe } from 'node:test';
import { timestamp } from '../api/index.js';

/**
 * @typedef {Object} Timestamp
 * @property {number} unix - The Unix timestamp in milliseconds
 * @property {string} utc - The UTC date string
 */

describe('The timestamp', () => {
  it('should return to the current time', () => {
    /** @type {Timestamp} */
    const expected = {
      unix: Date.parse(new Date()),
      utc: new Date().toUTCString()
    };
    let result = {};

    timestamp({ params: {} }, { json: (timestampResult) => (result = timestampResult) });

    assert.deepEqual(expected, result);
  });
  it(
    'should return the correct Timestamp object for the parameter in milliseconds',
    () => {
      /** @type {Timestamp} */
      const expected = {
        unix: "1599873211585",
        utc: "Sat, 12 Sep 2020 01:13:31 GMT"
      };
      let result = {};

      timestamp(
        { params: { date: expected.unix } },
        { json: (timestampResult) => (result = timestampResult) }
      );

      assert.deepEqual(expected, result);
    });
  it(
    'should return utc: "Fri, 25 Dec 2015 00:00:00 GMT" when the parameter be 1451001600000',
    () => {
      /** @type {Timestamp} */
      const expected = {
        unix: "1451001600000",
        utc: "Fri, 25 Dec 2015 00:00:00 GMT"
      };
      let result = {};

      timestamp(
        { params: { date: expected.unix } },
        { json: (timestampResult) => (result = timestampResult) }
      );

      assert.deepEqual(expected, result);
    });
  it(
    'should handle dates that can be successfully parsed by new Date(date_string)',
    () => {
      const date = new Date("1995-12-17T03:24:00");
      /** @type {Timestamp} */
      const expected = {
        unix: "819181440000",
        utc: "Sun, 17 Dec 1995 06:24:00 GMT"
      };
      let result = {};

      timestamp(
        { params: { date } },
        { json: (timestampResult) => (result = timestampResult) }
      );

      assert.deepEqual(expected, result);
    });
});

