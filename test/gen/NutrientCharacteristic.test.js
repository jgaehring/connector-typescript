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
		const mmetfburlz = new SKOSConcept({ connector, semanticId: 'http://base.com/izukvrsnzr' });
		
		const xpnpdfknic = new SKOSConcept({ connector, semanticId: 'http://base.com/lpokqwtzhb' });
		const obj = new NutrientCharacteristic({
			connector,
			unit: mmetfburlz,
			value: 0.8942886,
			nutrientDimension: xpnpdfknic
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = mmetfburlz;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.8942886;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualNutrientDimension = await obj.getQuantityDimension();
		const expectedNutrientDimension = xpnpdfknic;
		await t.test(`#nutrientDimension`, () => {
			assertSemanticEqual(actualNutrientDimension, expectedNutrientDimension);
		});
	});
});
