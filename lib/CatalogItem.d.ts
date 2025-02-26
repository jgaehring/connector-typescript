import IDefinedProduct from "./IDefinedProduct.js";
import IOffer from "./IOffer.js";
import ICatalog from "./ICatalog.js";
import ICatalogItem from "./ICatalogItem.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class CatalogItem extends SemanticObject implements ICatalogItem {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        product?: IDefinedProduct;
        sku?: string;
        stockLimitation?: number;
        offers?: IOffer[];
        catalogs?: ICatalog[];
        doNotStore?: boolean;
    });
    addOffer(offer: IOffer): void;
    getStockLimitation(): number | undefined;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    getSku(): string | undefined;
    registerInCatalog(repository: ICatalog): void;
    setStockLimitation(stockLimitation: number): void;
    setSku(sku: string): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map