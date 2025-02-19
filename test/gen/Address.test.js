import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Address from "../../lib/Address.js"
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

test('Address', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		
		
		
		
		
		const obj = new Address({
			connector,
			semanticId: "http://example.org/obj",
			street: "ulpgonszjn",
			postalCode: "jireyzuvzu",
			city: "aluenzcunb",
			country: "ghfmfcwjjo",
			latitude: 0.9614679,
			longitude: 0.804536,
			region: "tzeolwawfe"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualStreet = obj.getStreet();
		const expectedStreet = "ulpgonszjn";
		await t.test(`#street`, () => {
			assert.strictEqual(actualStreet, expectedStreet);
		});

		const actualPostalCode = obj.getPostalCode();
		const expectedPostalCode = "jireyzuvzu";
		await t.test(`#postalCode`, () => {
			assert.strictEqual(actualPostalCode, expectedPostalCode);
		});

		const actualCity = obj.getCity();
		const expectedCity = "aluenzcunb";
		await t.test(`#city`, () => {
			assert.strictEqual(actualCity, expectedCity);
		});

		const actualCountry = obj.getCountry();
		const expectedCountry = "ghfmfcwjjo";
		await t.test(`#country`, () => {
			assert.strictEqual(actualCountry, expectedCountry);
		});

		const actualLatitude = obj.getLatitude();
		const expectedLatitude = 0.9614679;
		await t.test(`#latitude`, () => {
			assert.strictEqual(actualLatitude, expectedLatitude);
		});

		const actualLongitude = obj.getLongitude();
		const expectedLongitude = 0.804536;
		await t.test(`#longitude`, () => {
			assert.strictEqual(actualLongitude, expectedLongitude);
		});

		const actualRegion = obj.getRegion();
		const expectedRegion = "tzeolwawfe";
		await t.test(`#region`, () => {
			assert.strictEqual(actualRegion, expectedRegion);
		});
	});
});
