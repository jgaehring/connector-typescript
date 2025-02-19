import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Flow from "../../lib/Flow.js"
import PlannedTransformation from "../../lib/PlannedTransformation.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Quantity from "../../lib/Quantity.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
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

test('PlannedProductionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const spjolanejk = new Quantity({ connector });
		const xvsvnskpdu = new PlannedTransformation({ connector, semanticId: 'http://base.com/ueukghmqmw' });
		const iugicushem = new SuppliedProduct({ connector, semanticId: 'http://base.com/kbvutixfqh' });
		const obj = new PlannedProductionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: spjolanejk,
			transformation: xvsvnskpdu,
			product: iugicushem
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = spjolanejk;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = xvsvnskpdu;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getProducedProduct();
		const expectedProduct = iugicushem;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
