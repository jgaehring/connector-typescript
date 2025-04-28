import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Price from "../../lib/Price.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
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

test('Price', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const qrekcrhejz = new SKOSConcept({ connector, semanticId: 'http://base.com/mrorxocyrx' });
		const obj = new Price({
			connector,
			value: 0.834699,
			vatRate: 0.120809674,
			unit: qrekcrhejz
		});

		

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.834699;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualVatRate = obj.getVatRate();
		const expectedVatRate = 0.120809674;
		await t.test(`#vatRate`, () => {
			assert.strictEqual(actualVatRate, expectedVatRate);
		});

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = qrekcrhejz;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});
	});
});
