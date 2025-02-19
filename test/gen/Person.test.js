import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Agent from "../../lib/Agent.js"
import Person from "../../lib/Person.js"
import Enterprise from "../../lib/Enterprise.js"
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

test('Person', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const duwwlcwtgw = [new Address({ connector, semanticId: 'http://base.com/jenqisxiqp' })];
		const dmmottuslr = [new Enterprise({ connector, semanticId: 'http://base.com/mhxoqepjzb' })];
		
		const obj = new Person({
			connector,
			semanticId: "http://example.org/obj",
			firstName: "bjmpjbikbb",
			lastName: "xavuldcnpc",
			localizations: duwwlcwtgw,
			organizations: dmmottuslr,
			logo: "dblljfuvwi"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualFirstName = obj.getFirstName();
		const expectedFirstName = "bjmpjbikbb";
		await t.test(`#firstName`, () => {
			assert.strictEqual(actualFirstName, expectedFirstName);
		});

		const actualLastName = obj.getLastName();
		const expectedLastName = "xavuldcnpc";
		await t.test(`#lastName`, () => {
			assert.strictEqual(actualLastName, expectedLastName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = duwwlcwtgw;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualOrganizations = await obj.getAffiliatedOrganizations();
		const expectedOrganizations = dmmottuslr;
		await actualOrganizations.forEach((actual, i) => {
			t.test(`#organizations[${i}]`, () => {
				assert.strictEqual(actual, expectedOrganizations[i]);
			});
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "dblljfuvwi";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
