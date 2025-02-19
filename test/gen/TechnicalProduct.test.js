import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import Quantity from "../../lib/Quantity.js"
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
import CatalogItem from "../../lib/CatalogItem.js"
import DefinedProduct from "../../lib/DefinedProduct.js"
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

test('TechnicalProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const qgjrdcevvv = new SKOSConcept({ connector, semanticId: 'http://base.com/azonwetslq' });
		const mhhlshbeeu = new Quantity({ connector });
		
		
		const qgcppcdvba = [new SKOSConcept({ connector, semanticId: 'http://base.com/iwiqtecnot' })];
		
		const xgnisvssep = [new AllergenCharacteristic({ connector })];
		const nwzhtuorkk = [new NutrientCharacteristic({ connector })];
		const fnkdkmmwff = [new PhysicalCharacteristic({ connector })];
		const wntnsljhwf = new SKOSConcept({ connector, semanticId: 'http://base.com/rssrirlgjo' });
		const uewaaohqtl = [new CatalogItem({ connector, semanticId: 'http://base.com/uxwfgqjtvc' })];
		const podepapltx = [new SKOSConcept({ connector, semanticId: 'http://base.com/kimqxnjdyc' })];
		const dolqouqlku = [new SKOSConcept({ connector, semanticId: 'http://base.com/ogfcgbkqch' })];
		const ohaxbfqhrp = [new SKOSConcept({ connector, semanticId: 'http://base.com/svcgfmwilf' })];
		const obj = new TechnicalProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "qcmeknhzzn",
			description: "qapqkwvvju",
			productType: qgjrdcevvv,
			quantity: mhhlshbeeu,
			alcoholPercentage: 0.3367231,
			lifetime: "wycpckypdg",
			claims: qgcppcdvba,
			usageOrStorageConditions: "nbeuiouqnk",
			allergenCharacteristics: xgnisvssep,
			nutrientCharacteristics: nwzhtuorkk,
			physicalCharacteristics: fnkdkmmwff,
			geographicalOrigin: wntnsljhwf,
			catalogItems: uewaaohqtl,
			certifications: podepapltx,
			natureOrigin: dolqouqlku,
			partOrigin: ohaxbfqhrp
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "qcmeknhzzn";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "qapqkwvvju";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = qgjrdcevvv;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = mhhlshbeeu;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.3367231;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "wycpckypdg";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = qgcppcdvba;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "nbeuiouqnk";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = xgnisvssep;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = nwzhtuorkk;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = fnkdkmmwff;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = wntnsljhwf;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = uewaaohqtl;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = podepapltx;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = dolqouqlku;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = ohaxbfqhrp;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});
	});
});
