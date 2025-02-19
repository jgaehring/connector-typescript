import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Quantity from "../../lib/Quantity.js"
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
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

test('SuppliedProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const gohztcrwyu = new SKOSConcept({ connector, semanticId: 'http://base.com/clchdxrgrm' });
		const jbbydxtbyr = new Quantity({ connector });
		
		
		const dhqbyanhua = [new SKOSConcept({ connector, semanticId: 'http://base.com/cvfxhickkh' })];
		
		const dggbwzptkq = [new AllergenCharacteristic({ connector })];
		const phfkbgtncs = [new NutrientCharacteristic({ connector })];
		const ckvdueyaep = [new PhysicalCharacteristic({ connector })];
		const tuxvxwmcle = new SKOSConcept({ connector, semanticId: 'http://base.com/lwquzgbypk' });
		const hkymijbcwu = [new CatalogItem({ connector, semanticId: 'http://base.com/jpoettkjpf' })];
		const chfdgazetb = [new SKOSConcept({ connector, semanticId: 'http://base.com/jeycslwhcs' })];
		const otyhnsostq = [new SKOSConcept({ connector, semanticId: 'http://base.com/xlvipgfgzn' })];
		const wbhcgwztiq = [new SKOSConcept({ connector, semanticId: 'http://base.com/lmfbiaspsp' })];
		
		
		const obj = new SuppliedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "dtlolaejid",
			description: "yojnpkdksi",
			productType: gohztcrwyu,
			quantity: jbbydxtbyr,
			alcoholPercentage: 0.08234209,
			lifetime: "bwzyewcnje",
			claims: dhqbyanhua,
			usageOrStorageConditions: "noyqtawcwr",
			allergenCharacteristics: dggbwzptkq,
			nutrientCharacteristics: phfkbgtncs,
			physicalCharacteristics: ckvdueyaep,
			geographicalOrigin: tuxvxwmcle,
			catalogItems: hkymijbcwu,
			certifications: chfdgazetb,
			natureOrigin: otyhnsostq,
			partOrigin: wbhcgwztiq,
			totalTheoreticalStock: 0.010341585,
			images: "cknsceojtu"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "dtlolaejid";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "yojnpkdksi";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = gohztcrwyu;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = jbbydxtbyr;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.08234209;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "bwzyewcnje";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = dhqbyanhua;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "noyqtawcwr";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = dggbwzptkq;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = phfkbgtncs;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = ckvdueyaep;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = tuxvxwmcle;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = hkymijbcwu;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = chfdgazetb;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = otyhnsostq;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = wbhcgwztiq;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualTotalTheoreticalStock = obj.getTotalTheoreticalStock();
		const expectedTotalTheoreticalStock = 0.010341585;
		await t.test(`#totalTheoreticalStock`, () => {
			assert.strictEqual(actualTotalTheoreticalStock, expectedTotalTheoreticalStock);
		});

		const actualImages = obj.getImages();
		const expectedImages = "cknsceojtu";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});
	});
});
