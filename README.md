# rural
Currently under development, a country helper for js apps neededin to normalize or use a standard base to get, ISO codes, currencies, capitals and potentially more localised data such as states etc. 

Why? As these are effectively JSON data sets, the return is fast and with out network latency of look up services external to the project. 
I am building this a normalization library cadidate. 

# Get Started

Install via NPM

`npm install rural --save`

import the module, for example:

`import rural from 'rural'`

There a couple of anscillary functions to handle additional lookups like ISO ALPHA 2 -> ALPHA 3 these can be included specifically.

`import {ruralIso} from 'rural'`

--- IF this dosnt make much sense ...... 

## Api

Functions all share the same PARAMS:

`rural(CODE,OUTPUT)`

### CODE = {String}
Example: `us` or `United States of America`

### Options = {Object}

Example: 

```
{
	"type" : "single",
	"case" : "upper"
}
```
Outputs a single code or string to uppercase, this is the default if no options object is passed. 





## Functions



Returns the data requested in the output params. 

## Dependencies


## Testing
