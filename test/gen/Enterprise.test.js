import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import CustomerCategory from "../../lib/CustomerCategory.js"
import Enterprise from "../../lib/Enterprise.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import Enterprise from "../../lib/Enterprise.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Address from "../../lib/Address.js"
import Catalog from "../../lib/Catalog.js"
import Person from "../../lib/Person.js"
import Enterprise from "../../lib/Enterprise.js"
import Agent from "../../lib/Agent.js"
import Enterprise from "../../lib/Enterprise.js"
import CatalogItem from "../../lib/CatalogItem.js"
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
		
		const iylofpliyr = [new Address({ connector, semanticId: 'http://base.com/igfhosdkjw' })];
		
		
		const vllsyrcljw = [new CustomerCategory({ connector, semanticId: 'http://base.com/nluoqvdtfp' })];
		const sivpfaqjph = [new Catalog({ connector, semanticId: 'http://base.com/cyqcxgmfyw' })];
		const pypmjkmwfn = [new CatalogItem({ connector, semanticId: 'http://base.com/futgwqgatt' })];
		const zqszfzyukw = [new SuppliedProduct({ connector, semanticId: 'http://base.com/vpgzpoylhq' })];
		const lrnadkmwev = [new TechnicalProduct({ connector, semanticId: 'http://base.com/bnuwwcpdso' })];
		const rvnxlmteat = new Person({ connector, semanticId: 'http://base.com/xeohfsrlna' });
		
		const obj = new Enterprise({
			connector,
			semanticId: "http://example.org/obj",
			name: "vvbzutrwbe",
			localizations: iylofpliyr,
			description: "kclazsoocl",
			vatNumber: "cpazwzzpiu",
			customerCategories: vllsyrcljw,
			catalogs: sivpfaqjph,
			catalogItems: pypmjkmwfn,
			suppliedProducts: zqszfzyukw,
			technicalProducts: lrnadkmwev,
			mainContact: rvnxlmteat,
			logo: "ztcbvaoany"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "vvbzutrwbe";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = iylofpliyr;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "kclazsoocl";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualVatNumber = obj.getVatNumber();
		const expectedVatNumber = "cpazwzzpiu";
		await t.test(`#vatNumber`, () => {
			assert.strictEqual(actualVatNumber, expectedVatNumber);
		});

		const actualCustomerCategories = await obj.getCustomerCategories();
		const expectedCustomerCategories = vllsyrcljw;
		await actualCustomerCategories.forEach((actual, i) => {
			t.test(`#customerCategories[${i}]`, () => {
				assert.strictEqual(actual, expectedCustomerCategories[i]);
			});
		});

		const actualCatalogs = await obj.getMaintainedCatalogs();
		const expectedCatalogs = sivpfaqjph;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});

		const actualCatalogItems = await obj.getManagedCatalogItems();
		const expectedCatalogItems = pypmjkmwfn;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = zqszfzyukw;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualTechnicalProducts = await obj.getProposedTechnicalProducts();
		const expectedTechnicalProducts = lrnadkmwev;
		await actualTechnicalProducts.forEach((actual, i) => {
			t.test(`#technicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedTechnicalProducts[i]);
			});
		});

		const actualMainContact = await obj.getMainContact();
		const expectedMainContact = rvnxlmteat;
		await t.test(`#mainContact`, () => {
			assertSemanticEqual(actualMainContact, expectedMainContact);
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "ztcbvaoany";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
