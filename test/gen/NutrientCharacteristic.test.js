import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
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

test('NutrientCharacteristic', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const fkxixdjudw = new SKOSConcept({ connector, semanticId: 'http://base.com/jjqsowfrdm' });
		
		const cmmmuujyxz = new SKOSConcept({ connector, semanticId: 'http://base.com/ibmgdsjqel' });
		const obj = new NutrientCharacteristic({
			connector,
			unit: fkxixdjudw,
			value: 0.921182,
			nutrientDimension: cmmmuujyxz
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = fkxixdjudw;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.921182;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualNutrientDimension = await obj.getQuantityDimension();
		const expectedNutrientDimension = cmmmuujyxz;
		await t.test(`#nutrientDimension`, () => {
			assertSemanticEqual(actualNutrientDimension, expectedNutrientDimension);
		});
	});
});
