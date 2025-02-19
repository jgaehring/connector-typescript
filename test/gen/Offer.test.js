import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Price from "../../lib/Price.js"
import Offer from "../../lib/Offer.js"
import CatalogItem from "../../lib/CatalogItem.js"
import CustomerCategory from "../../lib/CustomerCategory.js"
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

test('Offer', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const kvsindldzy = new CatalogItem({ connector, semanticId: 'http://base.com/ydhrwtdzen' });
		const sealwadmoy = new CustomerCategory({ connector, semanticId: 'http://base.com/qxeutfuter' });
		const czyweigwwb = new Price({ connector });
		
		const obj = new Offer({
			connector,
			semanticId: "http://example.org/obj",
			offeredItem: kvsindldzy,
			offeredTo: sealwadmoy,
			price: czyweigwwb,
			stockLimitation: 0.486364
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualOfferedItem = await obj.getOfferedItem();
		const expectedOfferedItem = kvsindldzy;
		await t.test(`#offeredItem`, () => {
			assertSemanticEqual(actualOfferedItem, expectedOfferedItem);
		});

		const actualOfferedTo = await obj.getCustomerCategory();
		const expectedOfferedTo = sealwadmoy;
		await t.test(`#offeredTo`, () => {
			assertSemanticEqual(actualOfferedTo, expectedOfferedTo);
		});

		const expectedPrice = czyweigwwb;
		const actualPrice = obj.getPrice();
		await t.test(`#price`, () => {
			assertSemanticEqual(actualPrice, expectedPrice);
		});

		const actualStockLimitation = obj.getStockLimitation();
		const expectedStockLimitation = 0.486364;
		await t.test(`#stockLimitation`, () => {
			assert.strictEqual(actualStockLimitation, expectedStockLimitation);
		});
	});
});
