import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import OrderLine from "../../lib/OrderLine.js"
import Price from "../../lib/Price.js"
import Offer from "../../lib/Offer.js"
import Order from "../../lib/Order.js"
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

test('OrderLine', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		const jdsszgcdhg = new Price({ connector });
		const htsrqocwmi = new Offer({ connector, semanticId: 'http://base.com/jpaqhnzfuw' });
		const yahljnddwq = new Order({ connector, semanticId: 'http://base.com/brhdgtxhqp' });
		const obj = new OrderLine({
			connector,
			semanticId: "http://example.org/obj",
			quantity: 0.45828217,
			price: jdsszgcdhg,
			offer: htsrqocwmi,
			order: yahljnddwq
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualQuantity = obj.getQuantity();
		const expectedQuantity = 0.45828217;
		await t.test(`#quantity`, () => {
			assert.strictEqual(actualQuantity, expectedQuantity);
		});

		const expectedPrice = jdsszgcdhg;
		const actualPrice = obj.getPrice();
		await t.test(`#price`, () => {
			assertSemanticEqual(actualPrice, expectedPrice);
		});

		const actualOffer = await obj.getOffer();
		const expectedOffer = htsrqocwmi;
		await t.test(`#offer`, () => {
			assertSemanticEqual(actualOffer, expectedOffer);
		});

		const actualOrder = await obj.getOrder();
		const expectedOrder = yahljnddwq;
		await t.test(`#order`, () => {
			assertSemanticEqual(actualOrder, expectedOrder);
		});
	});
});
