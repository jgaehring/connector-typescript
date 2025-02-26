import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
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

test('QuantitativeValue', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const morxjlzruj = new SKOSConcept({ connector, semanticId: 'http://base.com/bynkdanxmw' });
		
		const obj = new QuantitativeValue({
			connector,
			unit: morxjlzruj,
			value: 0.4255929
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = morxjlzruj;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.4255929;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});
	});
});
