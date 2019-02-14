"use strict";

var _chai = require("chai");

var _index = _interopRequireWildcard(require("./index"));

var _index2 = _interopRequireDefault(require("../dist/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Dist

/**
 * Test built files
 */
describe('The built files to work', () => {
  it('should return the countries object', () => {
    const all = (0, _index2.default)();
    (0, _chai.expect)(all).to.be.a('object');
  });
});
/**
 * Default
 */

describe('Default should return a full list of all countries', () => {
  it('should return the countries object', () => {
    const all = (0, _index.default)();
    (0, _chai.expect)(all).to.be.a('object');
  });
  it('should return a single country', () => {
    const all = (0, _index.default)('uSa');
    (0, _chai.expect)(all.currencySymbol).to.be.eql('$');
  });
});
/**
 * Iso
 */

describe('Iso : a function that returns the iso 2 or 3 dependent on the iso input', () => {
  it('shouyld return ISO3 with a ISO2 input', () => {
    const input = (0, _index.ruralIso)('US');
    (0, _chai.expect)(input).to.be.eql('USA');
  });
  it('shouyld return ISO2 with a ISO3 input', () => {
    const input = (0, _index.ruralIso)('UsA');
    (0, _chai.expect)(input).to.be.eql('US');
  });
  it('should return a console error when a non ISO is passed', () => {
    const input = (0, _index.ruralIso)('UsAAA');
    (0, _chai.expect)(input).to.be.false;
  });
});
/**
 * Name
 * Returns the name of the country based on Iso input
 */

describe('Name : a function that returns the counrties name when passed a valid ISO country code', () => {
  it('Should return the countries name when passed valid ISO2', () => {
    const input = (0, _index.ruralName)('gb');
    (0, _chai.expect)(input).to.be.eql('United Kingdom');
  });
  it('Should return the countries name when passed valid ISO3', () => {
    const input = (0, _index.ruralName)('CaN');
    (0, _chai.expect)(input).to.be.eql('Canada');
  });
  it('Should return false when passed an invalid ISO', () => {
    const input = (0, _index.ruralName)('CaNad');
    (0, _chai.expect)(input).to.be.false;
  });
});
/**
 * Currency Helpers
 */

describe('Rural Currency Helper Tests', () => {
  it('Should return an object of a single currency CA', () => {
    const canada = (0, _index.ruralCurrency)('CaD');
    (0, _chai.expect)(canada.currencySymbol).to.be.eql('CA$');
  });
  it('Should return an object of a single currency GB', () => {
    const uk = (0, _index.ruralCurrency)('gbp');
    (0, _chai.expect)(uk.currencySymbol).to.be.eql('£');
  });
  it('Should return an object of a single currency USA', () => {
    const usa = (0, _index.ruralCurrency)('uSd');
    (0, _chai.expect)(usa.currencySymbol).to.be.eql('$');
  });
  it('should throw an error with an invalid code', () => {
    const invalid = (0, _index.ruralCurrency)('SDFDCSAC');
    (0, _chai.expect)(invalid.error).to.be.true;
  });
  it('should throw an error with an invalid message', () => {
    const invalid = (0, _index.ruralCurrency)('SDFDCSAC');
    (0, _chai.expect)(invalid.message).to.be.a('string');
  });
});