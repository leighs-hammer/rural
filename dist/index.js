"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.ruralIso = exports.Iso = Iso;
exports.ruralName = exports.Name = Name;
exports.ruralRaw = exports.rawset = rawset;
exports.ruralCurrency = exports.currencyCode = currencyCode;

/**
 * Modules
 */

/**
 * DataSets
 */
var countries = require('./datasets/countries.json');

var countries_iso = require('./datasets/countries_iso.json');

var ruralFull = require('./datasets/rural.json');
/**
 * Rural
 * 
 * Default Params. 
 * @param {number} code
 * @param {object} options
 * @param {boolean} debug
 * @return {string, object}
 * 
 */
// default


function _default() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'returnAll';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (code === 'returnAll') {
    return ruralFull;
  } else {
    var upperCode = code.toUpperCase();

    if (upperCode.length === 2) {
      // fastest
      return ruralFull[upperCode];
    } else if (upperCode.length === 3) {
      // loop
      var codeIso = Iso(upperCode);
      return ruralFull["".concat(codeIso)];
    } else {
      console.error('Country Code to Short! requires either an ISO, AA or AAA code. ');
      return false;
    }
  }
} // ancsiliraries

/**
 * Returns the ISO Alpha 2 code to Aplpha 3, Options and Debug ar oprional. 
 * @param {string} code 
 * @param {object} options 
 * @param {string , object} debug 
 */


function Iso(code, options, debug) {
  if (!code) {
    return false;
  } // Catch lowercase


  var upperCode = code.toUpperCase(); // catch by length

  if (upperCode.length === 2) {
    return countries_iso["".concat(upperCode)];
  } else if (upperCode.length === 3) {
    // a performance costly method
    var sOut = ''; //console.log(Object.entries(countries_iso))

    for (var [key, item] of Object.entries(countries_iso)) {
      if (item === upperCode) {
        sOut = "".concat(key);
      }
    }

    return sOut;
  } else {
    console.error('Iso Output requires a 2 Charachter country code -> us -> usa');
    return false;
  }
}

/**
 * Returns the country code from ISO or 3 Char code, Options and Debug ar oprional. 
 * @param {string} code 
 * @param {object} options 
 * @param {string , object} debug 
 */
function Name(code, options, debug) {
  if (!code) {
    return false;
  } // Catch lowercase


  var upperCode = code.toUpperCase();

  if (upperCode.length === 2) {
    return countries["".concat(upperCode)]; // return
  } else if (upperCode.length === 3) {
    var lcode = Iso(upperCode, null, null); // return

    return countries["".concat(lcode)];
  } else {
    console.error('A valid ISO Alpha 2 or Alpha 3 code is required to look up country name');
    return false;
  }
}

/**
 * Returns the full data set of a specific option. 
 * @param {string} item
 * 'full' // 'names' // 'iso' 
 */
function rawset(item) {
  if (item !== undefined) {
    var upperCode = item.toUpperCase();

    switch (upperCode) {
      case 'FULL':
        return ruralFull;

      case 'ISO':
        return countries_iso;

      case 'NAMES':
        return countries;

      default:
        console.error('Requires an object to be returned, valid options are: "full", "names", "iso"');
        return false;
    }
  } else {
    console.error('Requires an object to be returned, valid options are: "full", "names", "iso"');
    return false;
  }
}

function currencyCode(code) {
  if (!code) {
    return false;
  }

  var values = Object.values(ruralFull);
  var foundCountry = values.find(country => {
    return country.currency === code.toUpperCase();
  });

  if (!foundCountry) {
    return {
      error: true,
      message: "No country could be found with the code : ".concat(code.toUpperCase())
    };
  }

  var cleanCurrency = {
    currency: foundCountry.currency,
    currencyPosition: foundCountry.currencyPosition,
    currencyMeta: foundCountry.currencyMeta,
    currencySymbol: foundCountry.currencySymbol,
    currencyName: foundCountry.currencyName,
    currencyNamePlural: foundCountry.currencyNamePlural,
    currecnyDecimalDigits: foundCountry.currecnyDecimalDigits,
    currencyRounding: foundCountry.currencyRounding
  };
  return cleanCurrency;
}