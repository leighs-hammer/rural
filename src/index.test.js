import {expect} from 'chai'
import Rural, {ruralIso, ruralName, ruralRaw, ruralCurrency} from './index'

// assert sources
const ruralFull = require('./datasets/rural.json')
const countries_iso = require('./datasets/countries_iso.json')
const countries = require('./datasets/countries.json')

// Dist
import BuiltRural, {}  from '../dist/index'

/**
 * Test built files
 */
describe('The built files to work', () => {
	it('should return the countries object', () => {
		const all = BuiltRural()
		expect(all).to.be.a('object')
	})
})

/**
 * Default
 */
describe('Default should return a full list of all countries', () => {
	
	it('should return the countries object', () => {
		const all = Rural()
		expect(all).to.be.a('object')
		expect(all).to.be.eql(ruralFull)
	})

	it('should return a single country ISO3', () => {
		const all = Rural('uSa')
		expect(all.currencySymbol).to.be.eql('$')
	})

	it('should return a single country ISO 2', () => {
		const all = Rural('uS')
		expect(all.currencySymbol).to.be.eql('$')
	})

	it('should return a single country ISO 2', () => {
		const all = Rural('i')
		expect(all).to.be.false
	})


})

/**
 * Iso
 */
describe('Iso : a function that returns the iso 2 or 3 dependent on the iso input', () => {

	it('shouyld return ISO3 with a ISO2 input',  () => {
		const input = ruralIso('US')
		expect(input).to.be.eql('USA')
	})

	it('shouyld return ISO2 with a ISO3 input',  () => {
		const input = ruralIso('UsA')
		expect(input).to.be.eql('US')
	})
	
	it('should return a console error when a non ISO is passed',  () => {
		const input = ruralIso('UsAAA')
		expect(input).to.be.false
	})

	it('should return a console error when a non ISO is passed',  () => {
		const input = ruralIso()
		expect(input).to.be.false
	})
})

/**
 * Name
 * Returns the name of the country based on Iso input
 */
describe('Name : a function that returns the counrties name when passed a valid ISO country code', () => {

	it('Should return the countries name when passed valid ISO2', () => {
		const input = ruralName('gb')
		expect(input).to.be.eql('United Kingdom')
	})

	it('Should return the countries name when passed valid ISO3', () => {
		const input = ruralName('CaN')
		expect(input).to.be.eql('Canada')
	})

	it('Should return false when passed an invalid ISO', () => {
		const input = ruralName('CaNad')
		expect(input).to.be.false
	})
	
	it('Should return fail and not throw', () => {
		const input = ruralName()
		expect(input).to.be.false
	})
})

/**
 * rawset
 * a function that simply returns a raw set of data int he fastest manner 
 */
describe('RawSet : a function that returns raw rapid access data sets', () => {
	
	it('should return the full data set', () => {
		const input = ruralRaw('FULL')
		expect(input).to.be.eql(ruralFull)
	})

	it('should return the full data set', () => {
		const input = ruralRaw('ISO')
		expect(input).to.be.eql(countries_iso)
	})
	
	it('should return the full data set', () => {
		const input = ruralRaw('NAMES')
		expect(input).to.be.eql(countries)
	})

	it('should fail gracefully', () => {
		const input = ruralRaw('sdcmdilmcd')
		expect(input).to.be.false
	})

	it('should fail gracefully with a failure', () => {
		const input = ruralRaw()
		expect(input).to.be.false
	})

})

/**
 * Currency Helpers
 */
describe('Rural Currency Helper Tests', () => {
	
	it('Should return an object of a single currency CA', () => {
		const canada = ruralCurrency('CaD')
		expect(canada.currencySymbol).to.be.eql('CA$')
	})

	it('Should return an object of a single currency GB', () => {
		const uk = ruralCurrency('gbp')
		expect(uk.currencySymbol).to.be.eql('£')
	})

	it('Should return an object of a single currency USA', () => {
		const usa = ruralCurrency('uSd')
		expect(usa.currencySymbol).to.be.eql('$')
	})

	it('should throw an error with an invalid code', () => {
		const invalid = ruralCurrency('SDFDCSAC')
		expect(invalid.error).to.be.true
	})

	it('should throw an error with an invalid message', () => {
		const invalid = ruralCurrency('SDFDCSAC')
		expect(invalid.message).to.be.a('string')
	})

	it('should throw an error with an invalid message', () => {
		const invalid = ruralCurrency('')
		expect(invalid).to.be.false
	})

})

/**
 * Datasets
 */
describe('Test that all datasets are exporting', () => {
	it('Should export all the objects', () => {
		expect(ruralFull).to.be.a('object')
		expect(countries_iso).to.be.a('object')
		expect(countries).to.be.a('object')
	})
})