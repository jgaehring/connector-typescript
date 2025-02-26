import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import Characteristic from "../../lib/Characteristic.js"
import { assertSemanticEqual } from '../utils.js';

const connector = new Connector();

const json = `{
    "@context": "https://www.datafoodconsortium.org",
    "@id": "http://myplatform.com/catalog1",
    "@type": "dfc-b:Catalog",
    "dfc-b:lists": {
        "@id": "http://myplatform.com/catalogItem1"
    },
    "dfc-b:maintainedBy": {
        "@id": "http://myplatform.com/enterprise1"
    }
}`;

test('AllergenCharacteristic', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const rvgeblgoeg = new SKOSConcept({ connector, semanticId: 'http://base.com/bodqsgpdvx' });
		
		const mzwessjxuw = new SKOSConcept({ connector, semanticId: 'http://base.com/hzhhtrgmww' });
		const obj = new AllergenCharacteristic({
			connector,
			unit: rvgeblgoeg,
			value: 0.3617108,
			allergenDimension: mzwessjxuw
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = rvgeblgoeg;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.3617108;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualAllergenDimension = await obj.getQuantityDimension();
		const expectedAllergenDimension = mzwessjxuw;
		await t.test(`#allergenDimension`, () => {
			assertSemanticEqual(actualAllergenDimension, expectedAllergenDimension);
		});
	});
});
