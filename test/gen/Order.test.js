import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import Person from "../../lib/Person.js"
import SaleSession from "../../lib/SaleSession.js"
import Order from "../../lib/Order.js"
import OrderLine from "../../lib/OrderLine.js"
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
		
		
		const qagqzhowhm = new SaleSession({ connector, semanticId: 'http://base.com/xqzhmjgmha' });
		const gzbacfkzrt = new Person({ connector, semanticId: 'http://base.com/ryswwwtqkg' });
		const jouvqksifx = [new OrderLine({ connector, semanticId: 'http://base.com/uerldvdznb' })];
		const xrkgnzngxl = new Person({ connector, semanticId: 'http://base.com/ztqeggvznp' });
		const vqkiduvmkd = new SKOSConcept({ connector, semanticId: 'http://base.com/oxmaikdmip' });
		const elfuvefzdk = new SKOSConcept({ connector, semanticId: 'http://base.com/svcteyznhn' });
		const tlosccsbgv = new SKOSConcept({ connector, semanticId: 'http://base.com/pxstoxugbx' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "rzdvuisypx",
			date: "qknrcmtklb",
			saleSession: qagqzhowhm,
			client: gzbacfkzrt,
			lines: jouvqksifx,
			soldBy: xrkgnzngxl,
			fulfilmentStatus: vqkiduvmkd,
			orderStatus: elfuvefzdk,
			paymentStatus: tlosccsbgv
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "rzdvuisypx";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "qknrcmtklb";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = qagqzhowhm;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = gzbacfkzrt;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = jouvqksifx;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = xrkgnzngxl;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = vqkiduvmkd;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = elfuvefzdk;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = tlosccsbgv;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});
	});
});
