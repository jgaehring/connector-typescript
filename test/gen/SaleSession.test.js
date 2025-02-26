import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Offer from "../../lib/Offer.js"
import SaleSession from "../../lib/SaleSession.js"
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

test('SaleSession', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		
		const wwyjxfcbwk = [new Offer({ connector, semanticId: 'http://base.com/bexisccdhz' })];
		const obj = new SaleSession({
			connector,
			semanticId: "http://example.org/obj",
			beginDate: "girgncimah",
			endDate: "sfwkmepbvc",
			quantity: 0.50048727,
			offers: wwyjxfcbwk
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualBeginDate = obj.getBeginDate();
		const expectedBeginDate = "girgncimah";
		await t.test(`#beginDate`, () => {
			assert.strictEqual(actualBeginDate, expectedBeginDate);
		});

		const actualEndDate = obj.getEndDate();
		const expectedEndDate = "sfwkmepbvc";
		await t.test(`#endDate`, () => {
			assert.strictEqual(actualEndDate, expectedEndDate);
		});

		const actualQuantity = obj.getQuantity();
		const expectedQuantity = 0.50048727;
		await t.test(`#quantity`, () => {
			assert.strictEqual(actualQuantity, expectedQuantity);
		});

		const actualOffers = await obj.getOffers();
		const expectedOffers = wwyjxfcbwk;
		await actualOffers.forEach((actual, i) => {
			t.test(`#offers[${i}]`, () => {
				assert.strictEqual(actual, expectedOffers[i]);
			});
		});
	});
});
