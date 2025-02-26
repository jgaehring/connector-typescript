import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PlannedConsumptionFlow from "../../lib/PlannedConsumptionFlow.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Flow from "../../lib/Flow.js"
import PlannedConsumptionFlow from "../../lib/PlannedConsumptionFlow.js"
import Quantity from "../../lib/Quantity.js"
import PlannedTransformation from "../../lib/PlannedTransformation.js"
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

test('PlannedConsumptionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const czsyvclfdv = new Quantity({ connector });
		const ymefbrngec = new PlannedTransformation({ connector, semanticId: 'http://base.com/pfhbrdvwih' });
		const pynxvyvplr = new SuppliedProduct({ connector, semanticId: 'http://base.com/czdotdlxrg' });
		const obj = new PlannedConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: czsyvclfdv,
			transformation: ymefbrngec,
			product: pynxvyvplr
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = czsyvclfdv;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = ymefbrngec;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = pynxvyvplr;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
