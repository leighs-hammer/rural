# rural
Currently under development, a country helper for js apps neededin to normalize or use a standard base to get, ISO codes, currencies, capitals and potentially more localised data such as states etc. 

Why? As these are effectively JSON data sets, the return is fast and with out network latency of look up services external to the project. 
I am building this a normalization library cadidate. 

# Get Started

Install via NPM
`npm install rural --save`

import the module, for example:
`import Rural from 'rural'`

To use it:
`Rural('us')` or `Rural('usa')` or `Rural('US')`
=> Returns a full object of the countries details.

## Note : This may be overkill

Often you need something simpler, the anscillary functions
 
`import {ruralIso} from 'rural'`

--- IF this dosnt make much sense ...... 

## Api


## Functions

### ruralIso
Function returns the alternate ISO country code to what you pass it. 


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
Function returns the country name from an ISO Aplha 2 or 3 code. 

`ruralName('us')` or `ruralName('usa')`
=> Returns
`United States of America`

Note this will catch case and miss matches in case, 
`'US' = 'us' = 'Us' = 'uS'`



## Dependencies

`lodash` -> https://lodash.com/
Just a great utility library. 

## Testing
