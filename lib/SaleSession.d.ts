import IOffer from "./IOffer.js";
import ISaleSession from "./ISaleSession.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class SaleSession extends SemanticObject implements ISaleSession {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        beginDate?: string;
        endDate?: string;
        quantity?: number;
        offers?: IOffer[];
        doNotStore?: boolean;
    });
    getEndDate(): string | undefined;
    setQuantity(quantity: number): void;
    getQuantity(): number | undefined;
    getBeginDate(): string | undefined;
    setBeginDate(beginDate: string): void;
    setEndDate(endDate: string): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    addOffer(offer: IOffer): void;
}
//# sourceMappingURL=SaleSession.d.ts.map