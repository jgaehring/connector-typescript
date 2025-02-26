import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
import DefinedProduct from "../../lib/DefinedProduct.js"
import CatalogItem from "../../lib/CatalogItem.js"
import Quantity from "../../lib/Quantity.js"
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

test('SuppliedProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const jkqewdjsly = new SKOSConcept({ connector, semanticId: 'http://base.com/laopjrzhbr' });
		const favvgqcgwn = new Quantity({ connector });
		
		
		const qisvkbzwdn = [new SKOSConcept({ connector, semanticId: 'http://base.com/zwxzyvrfmm' })];
		
		const bldydphugw = [new AllergenCharacteristic({ connector })];
		const pdznzieyvw = [new NutrientCharacteristic({ connector })];
		const mvmwcipjla = [new PhysicalCharacteristic({ connector })];
		const fpvoyjmjnq = new SKOSConcept({ connector, semanticId: 'http://base.com/mktipgxpxg' });
		const vocquasfmm = [new CatalogItem({ connector, semanticId: 'http://base.com/kmerwzzyjm' })];
		const lxtdtmnnlq = [new SKOSConcept({ connector, semanticId: 'http://base.com/lfhulduqzr' })];
		const zugmkpiryi = [new SKOSConcept({ connector, semanticId: 'http://base.com/zeaaxhabfl' })];
		const mswlutkdku = [new SKOSConcept({ connector, semanticId: 'http://base.com/rafjedbuok' })];
		
		
		const obj = new SuppliedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "maexiuvbxv",
			description: "rxzcznphlz",
			productType: jkqewdjsly,
			quantity: favvgqcgwn,
			alcoholPercentage: 0.8312765,
			lifetime: "iaymzrvggj",
			claims: qisvkbzwdn,
			usageOrStorageConditions: "pxztmshgrp",
			allergenCharacteristics: bldydphugw,
			nutrientCharacteristics: pdznzieyvw,
			physicalCharacteristics: mvmwcipjla,
			geographicalOrigin: fpvoyjmjnq,
			catalogItems: vocquasfmm,
			certifications: lxtdtmnnlq,
			natureOrigin: zugmkpiryi,
			partOrigin: mswlutkdku,
			totalTheoreticalStock: 0.30647707,
			images: "hwmzphcdyg"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "maexiuvbxv";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "rxzcznphlz";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = jkqewdjsly;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = favvgqcgwn;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.8312765;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "iaymzrvggj";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = qisvkbzwdn;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "pxztmshgrp";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = bldydphugw;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = pdznzieyvw;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = mvmwcipjla;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = fpvoyjmjnq;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = vocquasfmm;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = lxtdtmnnlq;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = zugmkpiryi;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = mswlutkdku;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualTotalTheoreticalStock = obj.getTotalTheoreticalStock();
		const expectedTotalTheoreticalStock = 0.30647707;
		await t.test(`#totalTheoreticalStock`, () => {
			assert.strictEqual(actualTotalTheoreticalStock, expectedTotalTheoreticalStock);
		});

		const actualImages = obj.getImages();
		const expectedImages = "hwmzphcdyg";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});
	});
});
