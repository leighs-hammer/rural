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