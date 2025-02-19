import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Enterprise from "../../lib/Enterprise.js"
import Enterprise from "../../lib/Enterprise.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Enterprise from "../../lib/Enterprise.js"
import Person from "../../lib/Person.js"
import Agent from "../../lib/Agent.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import Enterprise from "../../lib/Enterprise.js"
import CatalogItem from "../../lib/CatalogItem.js"
import CustomerCategory from "../../lib/CustomerCategory.js"
import Catalog from "../../lib/Catalog.js"
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

test('Enterprise', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		const snbfajlleh = [new Address({ connector, semanticId: 'http://base.com/lilpbuyeop' })];
		
		
		const jevcvrzaeo = [new CustomerCategory({ connector, semanticId: 'http://base.com/hrluznmhcl' })];
		const iltgcudboz = [new Catalog({ connector, semanticId: 'http://base.com/dhplyrtdsd' })];
		const jhgjdyoqyv = [new CatalogItem({ connector, semanticId: 'http://base.com/pdgjwepwmd' })];
		const wpbgcnxfao = [new SuppliedProduct({ connector, semanticId: 'http://base.com/ylftdovjfd' })];
		const axaqncdgbd = [new TechnicalProduct({ connector, semanticId: 'http://base.com/qggtukuzfg' })];
		const okgrcdkcpn = new Person({ connector, semanticId: 'http://base.com/agaipixlcr' });
		
		const obj = new Enterprise({
			connector,
			semanticId: "http://example.org/obj",
			name: "rzlwcotwfr",
			localizations: snbfajlleh,
			description: "vspatapzkp",
			vatNumber: "xnjwtlbelo",
			customerCategories: jevcvrzaeo,
			catalogs: iltgcudboz,
			catalogItems: jhgjdyoqyv,
			suppliedProducts: wpbgcnxfao,
			technicalProducts: axaqncdgbd,
			mainContact: okgrcdkcpn,
			logo: "stinbacwgf"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "rzlwcotwfr";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = snbfajlleh;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "vspatapzkp";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualVatNumber = obj.getVatNumber();
		const expectedVatNumber = "xnjwtlbelo";
		await t.test(`#vatNumber`, () => {
			assert.strictEqual(actualVatNumber, expectedVatNumber);
		});

		const actualCustomerCategories = await obj.getCustomerCategories();
		const expectedCustomerCategories = jevcvrzaeo;
		await actualCustomerCategories.forEach((actual, i) => {
			t.test(`#customerCategories[${i}]`, () => {
				assert.strictEqual(actual, expectedCustomerCategories[i]);
			});
		});

		const actualCatalogs = await obj.getMaintainedCatalogs();
		const expectedCatalogs = iltgcudboz;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});

		const actualCatalogItems = await obj.getManagedCatalogItems();
		const expectedCatalogItems = jhgjdyoqyv;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = wpbgcnxfao;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualTechnicalProducts = await obj.getProposedTechnicalProducts();
		const expectedTechnicalProducts = axaqncdgbd;
		await actualTechnicalProducts.forEach((actual, i) => {
			t.test(`#technicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedTechnicalProducts[i]);
			});
		});

		const actualMainContact = await obj.getMainContact();
		const expectedMainContact = okgrcdkcpn;
		await t.test(`#mainContact`, () => {
			assertSemanticEqual(actualMainContact, expectedMainContact);
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "stinbacwgf";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
