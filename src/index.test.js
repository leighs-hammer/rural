import {expect} from 'chai'
import Rural, {ruralIso, ruralName, ruralRaw, ruralCurrency} from './index'

// Dist
import BuiltRural  from '../dist/index'
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
	})

	it('should return a single country', () => {
		const all = Rural('uSa')
		expect(all.currencySymbol).to.be.eql('$')
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

})