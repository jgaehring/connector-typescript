import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
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

test('TechnicalProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const vxfgpmlhdb = new SKOSConcept({ connector, semanticId: 'http://base.com/bjtzkslweg' });
		const cjzfklgpno = new Quantity({ connector });
		
		
		const sluwgpkrsl = [new SKOSConcept({ connector, semanticId: 'http://base.com/knojorodln' })];
		
		const azkuxklscz = [new AllergenCharacteristic({ connector })];
		const dmpqobaael = [new NutrientCharacteristic({ connector })];
		const jrusyunhqa = [new PhysicalCharacteristic({ connector })];
		const jpflhxykhh = new SKOSConcept({ connector, semanticId: 'http://base.com/tesnllnfkm' });
		const zvgzglsgpi = [new CatalogItem({ connector, semanticId: 'http://base.com/qcfexvrfbz' })];
		const hoqxjyfzhm = [new SKOSConcept({ connector, semanticId: 'http://base.com/zsqbhigeyy' })];
		const wqqklvttna = [new SKOSConcept({ connector, semanticId: 'http://base.com/wmbfyxxeqy' })];
		const avceylqvfp = [new SKOSConcept({ connector, semanticId: 'http://base.com/uzuddrrcpg' })];
		const obj = new TechnicalProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "kuenvtggns",
			description: "jeahlybjnt",
			productType: vxfgpmlhdb,
			quantity: cjzfklgpno,
			alcoholPercentage: 0.9663534,
			lifetime: "ejwzdohvdm",
			claims: sluwgpkrsl,
			usageOrStorageConditions: "vquhxioajy",
			allergenCharacteristics: azkuxklscz,
			nutrientCharacteristics: dmpqobaael,
			physicalCharacteristics: jrusyunhqa,
			geographicalOrigin: jpflhxykhh,
			catalogItems: zvgzglsgpi,
			certifications: hoqxjyfzhm,
			natureOrigin: wqqklvttna,
			partOrigin: avceylqvfp
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "kuenvtggns";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "jeahlybjnt";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = vxfgpmlhdb;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = cjzfklgpno;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.9663534;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "ejwzdohvdm";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = sluwgpkrsl;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "vquhxioajy";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = azkuxklscz;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = dmpqobaael;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = jrusyunhqa;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = jpflhxykhh;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = zvgzglsgpi;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = hoqxjyfzhm;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = wqqklvttna;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = avceylqvfp;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});
	});
});
