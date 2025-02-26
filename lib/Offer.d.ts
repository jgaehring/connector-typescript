import ICustomerCategory from "./ICustomerCategory.js";
import IOffer from "./IOffer.js";
import ICatalogItem from "./ICatalogItem.js";
import IPrice from "./IPrice.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Offer extends SemanticObject implements IOffer {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        offeredItem?: ICatalogItem;
        offeredTo?: ICustomerCategory;
        price?: IPrice;
        stockLimitation?: number;
        doNotStore?: boolean;
    });
    getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined>;
    getStockLimitation(): number | undefined;
    setCustomerCategory(customerCategory: ICustomerCategory): void;
    setPrice(price: IPrice): void;
    setOfferedItem(offeredItem: ICatalogItem): void;
    getPrice(): IPrice | undefined;
    getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined>;
    setStockLimitation(stockLimitation: number): void;
}
//# sourceMappingURL=Offer.d.ts.map