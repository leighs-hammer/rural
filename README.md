# rural
Currently under development, a country helper module for js apps neededin to normalize or use a standard base to get, ISO codes, currencies, capitals and potentially more localised data such as states etc. 

Why use a module over a lookup service? As these are effectively JSON data sets, the return is fast and with out network latency of look up services external to the project. 

## Notes on Requirements 

Built using ES6 `import X from X` if your project isnt running something like Babel or a Webpack loader to allow access to next gen syntax, you will be facing some hell with this module. We are awaiting raw support in node at present, and of course global adoption! :)

## Roadmaps

### V 0.2+ 
Include full country data Set for availability. 

### V 0.3+
Crowd sourced data managemnt for compilation, via example site.

### V 0.4
Additional functions added for currenct support. 


# Get Started

Install via NPM
`npm install rural --save`

import the module, for example:
`import Rural from 'rural'`

To use it:
`Rural('us')` or `Rural('usa')` or `Rural('US')`
=> Returns a full object of the countries details.

## Note : This may be overkill

Often you need something simpler, the additioanl functions may suit you needs:
 
`import Rural, {ruralIso, ruralName} from 'rural'` or just what you need. 

# Api

Default API still TBD.

## Additional Functions & Helpers

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

`lodash` -> https://lodash.com/
Just a great utility library. 

## Testing

Unit tests, and CI need to still be done.