import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import SaleSession from "../../lib/SaleSession.js"
import OrderLine from "../../lib/OrderLine.js"
import Person from "../../lib/Person.js"
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

test('Order', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const hpgqhjunrk = new SaleSession({ connector, semanticId: 'http://base.com/hidrxtarrw' });
		const dylfqwvroy = new Person({ connector, semanticId: 'http://base.com/rfvqsdsoqi' });
		const eyykznumws = [new OrderLine({ connector, semanticId: 'http://base.com/ucbzkdjilo' })];
		const qwwirogssy = new Person({ connector, semanticId: 'http://base.com/epojocqtaq' });
		const jzbkfumvrq = new SKOSConcept({ connector, semanticId: 'http://base.com/iuqbdzpuch' });
		const pkupwvabog = new SKOSConcept({ connector, semanticId: 'http://base.com/ahshzbljug' });
		const imoqtwttei = new SKOSConcept({ connector, semanticId: 'http://base.com/kpcupuphox' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "gilxbikqzs",
			date: "xwqzzurhuu",
			saleSession: hpgqhjunrk,
			client: dylfqwvroy,
			lines: eyykznumws,
			soldBy: qwwirogssy,
			fulfilmentStatus: jzbkfumvrq,
			orderStatus: pkupwvabog,
			paymentStatus: imoqtwttei
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "gilxbikqzs";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "xwqzzurhuu";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = hpgqhjunrk;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = dylfqwvroy;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = eyykznumws;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = qwwirogssy;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = jzbkfumvrq;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = pkupwvabog;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = imoqtwttei;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});
	});
});
