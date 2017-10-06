/**
 * Countries
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

// Ancsiliraries

export function ancs(){
  console.log('ancilirary');
}
export { ancs as ruralRaw };