# rural
A country look up module for js apps neededing to normalize or use a standard base to get, ISO codes, currency info, capitals and more to follow. 

Why use a module over a lookup service? As these are effectively JSON data sets, the return is fast and with out network latency of look up services external to the project. 

## Notes on Requirements 
The previous dependency of lodash has been removed as of V 0.1.11

## Roadmaps

### V 0.1+ : Available
Includes a full set of data combined from multiple sources and it useable at present.

### V 0.2+ 
Optimized sub module loaders for further rapid access mechanisms.

### V 0.3+
Crowd sourced data managemnt for compilation, via example site.

### V 0.4
Additional functions added for currenct support. 


# Fast Start

Install via NPM
`npm install rural --save`

import the module, for example:
`import Rural from 'rural'`

To use it:
`Rural('us')` or `Rural('usa')` or `Rural('US')`
=> Returns a full object of the countries details.

```
	{
		"ISO2": "US",
		"ISO3": "USA",
		"name": "United States of America",
		"captialCity": "Washington",
		"dialingCode": "1",
		"currency": "USD",
		"currencyPosition": "pre",
		"currencyMeta": true,
		"currencySymbol": "$",
		"currencyName": "US Dollar",
		"currencyNamePlural": "US dollars",
		"currecnyDecimalDigits": 2,
		"currencyRounding": 0
	}
```

## Note : This may be overkill

Often you need something simpler, the additional functions may suit you needs better!
 
`import Rural, {ruralIso, ruralName} from 'rural'` or just what you need `import {ruralName} from 'rural'`

# Api

## Default Usage

`Rural('CODE', OPTIONS, DEBUG)`

### CODE : STRING : SUGGESTED
Refers to an ISO2 or ISO3 country code
`'US'` or `'USA'` respectively.

If this is left null: 
`Rural()` will return the entire rural data set.

### OPTIONS : OBJECT : OPTIONAL
Options is placed in for further extesnion. 

### DEBUG : BOOLEAN : OPTIONAL
Passing a bool `true` will log the returned data should you require this. 

### RETURNS : OBJECT
returns an object of country data.

```
	{
		"ISO2": "US",
		"ISO3": "USA",
		"name": "United States of America",
		"captialCity": "Washington",
		"dialingCode": "1",
		"currency": "USD",
		"currencyPosition": "pre",
		"currencyMeta": true,
		"currencySymbol": "$",
		"currencyName": "US Dollar",
		"currencyNamePlural": "US dollars",
		"currecnyDecimalDigits": 2,
		"currencyRounding": 0
	}
```

### ALL DATA
Sometimes you may like to do the return once and iterate how you want from the full set. 
`Rural()` => calling the default function with no params will return the complete data object.
This can be useful to remove overhead to only your app code, for instance having all countries available to pivot data as you see fit.


### Example Usage : JSX

Using lodash map function in a JSX to return all the countries info:

```
	<ul>
		{map(Rural('USa'), (item,key)=>{
			return <li>{key} : {item} </li>
		})}
	</ul>
``` 
Note the sanetization for sentence case or other nasties, in data inconsistencies.

### Individual Example : JSX

Using what you need specifically. 

```
	<h1>{Rural('us').name}</h1>
```
In this use case the `ruralName` submodule would be a better use case ( need to be imported), but uses a smaller more succint data set so is more performant.

```
	<h1>{ruralName('us')}</h1>
```

## Additional Functions & Helpers
These will run faster with ISO2 country codes as no loop and iterate will be needed, which is faster accross the board.
These use optimized for purpose datasets so when paired with an ISO2 code will give the best performance.

### ruralIso
Function returns the alternate ISO country code to what you pass it. Useful if your data set is in one either of the Alpha formats and you want to switch it to the other one. 

Example:

`ruralIso('US')`
 => Returns
`USA`

Vice Versa 

`ruralIso('USA')`
=> Returns
`US`

Note this will catch case and miss matches in case, 
`'US' = 'us' = 'Us' = 'uS'`

### ruralName
Function returns the country name from an ISO Aplha 2 or 3 code. Useful if you just want to work with ISO codes and return a full company name.

`ruralName('us')` or `ruralName('usa')`
=> Returns
`United States of America`

Note this will catch case and miss matches in case, 
`'US' = 'us' = 'Us' = 'uS'`

## Dependencies


## Testing

Unit tests, and CI need to still be done.