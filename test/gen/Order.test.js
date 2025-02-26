import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Enterprise from "../../lib/Enterprise.js"
import OrderLine from "../../lib/OrderLine.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import SaleSession from "../../lib/SaleSession.js"
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
		
		
		const plbfuumljf = new SaleSession({ connector, semanticId: 'http://base.com/jhxnspmbkp' });
		const bwhhekdgea = new Enterprise({ connector, semanticId: 'http://base.com/edsdrzmdiz' });
		const qxcyxmlouv = [new OrderLine({ connector, semanticId: 'http://base.com/xvxcvilsvb' })];
		const jnrrlyscmr = new Enterprise({ connector, semanticId: 'http://base.com/cveuqpjexe' });
		const bnxtedvzol = new SKOSConcept({ connector, semanticId: 'http://base.com/ckigriftla' });
		const mxiwzajnjg = new SKOSConcept({ connector, semanticId: 'http://base.com/gasnbvdpst' });
		const ewbotwfsca = new SKOSConcept({ connector, semanticId: 'http://base.com/rzcuautise' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "xanliynocp",
			date: "tujvxfdmnn",
			saleSession: plbfuumljf,
			client: bwhhekdgea,
			lines: qxcyxmlouv,
			soldBy: jnrrlyscmr,
			fulfilmentStatus: bnxtedvzol,
			orderStatus: mxiwzajnjg,
			paymentStatus: ewbotwfsca
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "xanliynocp";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "tujvxfdmnn";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = plbfuumljf;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = bwhhekdgea;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = qxcyxmlouv;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = jnrrlyscmr;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = bnxtedvzol;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = mxiwzajnjg;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = ewbotwfsca;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});
	});
});
