import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
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
		const fuorirtxxy = new SKOSConcept({ connector, semanticId: 'http://base.com/evtfcbggaw' });
		
		const zwkaspvrhq = new SKOSConcept({ connector, semanticId: 'http://base.com/gnbbytdlql' });
		const obj = new AllergenCharacteristic({
			connector,
			unit: fuorirtxxy,
			value: 0.68520457,
			allergenDimension: zwkaspvrhq
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = fuorirtxxy;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.68520457;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualAllergenDimension = await obj.getQuantityDimension();
		const expectedAllergenDimension = zwkaspvrhq;
		await t.test(`#allergenDimension`, () => {
			assertSemanticEqual(actualAllergenDimension, expectedAllergenDimension);
		});
	});
});
