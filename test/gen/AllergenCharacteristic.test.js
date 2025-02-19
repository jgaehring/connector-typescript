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
		const hkfmpyrzjk = new SKOSConcept({ connector, semanticId: 'http://base.com/qhmvnubiul' });
		
		const zlsaujfojw = new SKOSConcept({ connector, semanticId: 'http://base.com/utmnbtenff' });
		const obj = new AllergenCharacteristic({
			connector,
			unit: hkfmpyrzjk,
			value: 0.55636907,
			allergenDimension: zlsaujfojw
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = hkfmpyrzjk;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.55636907;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualAllergenDimension = await obj.getQuantityDimension();
		const expectedAllergenDimension = zlsaujfojw;
		await t.test(`#allergenDimension`, () => {
			assertSemanticEqual(actualAllergenDimension, expectedAllergenDimension);
		});
	});
});
