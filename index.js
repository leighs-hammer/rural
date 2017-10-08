/**
 * Modules
 */
const _  = require('lodash')

/**
 * DataSets
 */
const countries = require('./datasets/countries.json')
const countries_iso = require('./datasets/countries_iso.json')
const ruralFull = require('./datasets/rural.json')

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
export default function(code,options,debug) {
	// Options Modifiers
	console.error('Currently Working on data set, the default function is not available.')
	// Remove on production
	// Logs out the params if the debug is passed
	if(debug !== undefined && debug === true) {
		console.log(code)
		console.log(options)
	}
	// Return

}

// ancsiliraries

/**
 * Returns the ISO Alpha 2 code to Aplpha 3, Options and Debug ar oprional. 
 * @param {string} code 
 * @param {object} options 
 * @param {string , object} debug 
 */

export function Iso(code,options,debug){
	// Catch lowercase
	var upperCode = code.toUpperCase()

	// catch by length
	if(upperCode.length === 2) {
		return countries_iso[`${upperCode}`]
	} else if(upperCode.length === 3) {
		// a performance costly method
		var sOut =''
		_.map(countries_iso, (item,key) => {
			if(item === upperCode){
				sOut = `${key}`
			}
		})
		return sOut
	} else {
		console.error('Iso Output requires a 2 Charachter country code -> us -> usa')
	}
	// Remove on production
	// Logs out the params if the debug is passed
	if(debug !== undefined && debug === true) {
		console.log(code)
		console.log(options)
		console.log(countries_iso)
	}
	// Return
}
export { Iso as ruralIso }

/**
 * Returns the country code from ISO or 3 Char code, Options and Debug ar oprional. 
 * @param {string} code 
 * @param {object} options 
 * @param {string , object} debug 
 */

export function Name(code,options,debug){
	// Catch lowercase
	var upperCode = code.toUpperCase()

	if(upperCode.length === 2) {
		return countries[`${upperCode}`]
		// return
	} else if (upperCode.length === 3) {
		var lcode = Iso(upperCode, null, null)
		// return
		return countries[`${lcode}`]
	} else {
		console.error('A valid ISO Alpha 2 or Alpha 3 code is required to look up country name')
	}
	// Remove on production
	// Logs out the params if the debug is passed
	if(debug !== undefined && debug === true) {
		console.log(code)
		console.log(options)
	}
	// Return
}
export { Name as ruralName }

/**
 * Returns the full data set of a specific option. 
 * @param {string} item 
 */


export function rawset(item) {
	var rawData = item

	console.error(rawData)

}

export {rawset as ruralRaw}