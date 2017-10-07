/**
 * DataSets
 */

import countries_iso from './datasets/countries_iso.js';

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

	// Remove on production
	// Logs out the params if the debug is passed
	if(debug !== undefined && debug === true) {
		console.log(code);
		console.log(options);
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
	var upperCode = code.toUpperCase();
	if(upperCode.length === 2) {
		console.log(countries_iso[`${upperCode}`]);
		return countries_iso[`${upperCode}`];
	} else {
		console.error('Iso Output requires a 2 Charachter country code -> us -> usa');
	}
	// Remove on production
	// Logs out the params if the debug is passed
	if(debug !== undefined && debug === true) {
		console.log(code);
		console.log(options);
		console.log(countries_iso);
	}
	// Return
}
export { Iso as ruralIso };

/**
 * Returns the country code from ISO or 3 Char code, Options and Debug ar oprional. 
 * @param {string} code 
 * @param {object} options 
 * @param {string , object} debug 
 */

export function Name(code,options,debug){

	// Remove on production
	// Logs out the params if the debug is passed
	if(debug !== undefined && debug === true) {
		console.log(code);
		console.log(options);
	}
	// Return
}
export { Name as ruralName };