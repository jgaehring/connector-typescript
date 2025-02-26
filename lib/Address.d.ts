import IAddress from "./IAddress.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class Address extends SemanticObject implements IAddress {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        street?: string;
        postalCode?: string;
        city?: string;
        country?: string;
        latitude?: number;
        longitude?: number;
        region?: string;
        doNotStore?: boolean;
    });
    getStreet(): string | undefined;
    setLongitude(longitude: number): void;
    setCity(city: string): void;
    setCountry(country: string): void;
    setPostalCode(postalCode: string): void;
    getPostalCode(): string | undefined;
    getRegion(): string | undefined;
    getCity(): string | undefined;
    getLatitude(): number | undefined;
    setRegion(region: string): void;
    setLatitude(latitude: number): void;
    setStreet(street: string): void;
    getCountry(): string | undefined;
    getLongitude(): number | undefined;
}
//# sourceMappingURL=Address.d.ts.map