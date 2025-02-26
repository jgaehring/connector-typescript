import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Enterprise from "../../lib/Enterprise.js"
import Address from "../../lib/Address.js"
import Person from "../../lib/Person.js"
import Agent from "../../lib/Agent.js"
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
		
		
		const pwxqcwhbcp = [new Address({ connector, semanticId: 'http://base.com/wjgpjxsvup' })];
		const xalspxkkvz = [new Enterprise({ connector, semanticId: 'http://base.com/bobrylfebx' })];
		
		const obj = new Person({
			connector,
			semanticId: "http://example.org/obj",
			firstName: "ozixjksumz",
			lastName: "piygpympqs",
			localizations: pwxqcwhbcp,
			organizations: xalspxkkvz,
			logo: "adeapqdtat"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualFirstName = obj.getFirstName();
		const expectedFirstName = "ozixjksumz";
		await t.test(`#firstName`, () => {
			assert.strictEqual(actualFirstName, expectedFirstName);
		});

		const actualLastName = obj.getLastName();
		const expectedLastName = "piygpympqs";
		await t.test(`#lastName`, () => {
			assert.strictEqual(actualLastName, expectedLastName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = pwxqcwhbcp;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualOrganizations = await obj.getAffiliatedOrganizations();
		const expectedOrganizations = xalspxkkvz;
		await actualOrganizations.forEach((actual, i) => {
			t.test(`#organizations[${i}]`, () => {
				assert.strictEqual(actual, expectedOrganizations[i]);
			});
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "adeapqdtat";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
