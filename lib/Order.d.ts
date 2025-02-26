import IAgent from "./IAgent.js";
import IOrderLine from "./IOrderLine.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Order extends SemanticObject implements IOrder {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        number?: string;
        date?: string;
        saleSession?: ISaleSession;
        client?: IAgent;
        lines?: IOrderLine[];
        soldBy?: IAgent;
        fulfilmentStatus?: ISKOSConcept;
        orderStatus?: ISKOSConcept;
        paymentStatus?: ISKOSConcept;
        doNotStore?: boolean;
    });
    setDate(date: string): void;
    getFulfilmentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getSoldBy(options?: IGetterOptions): Promise<IAgent | undefined>;
    setSoldBy(soldBy: IAgent): void;
    getNumber(): string | undefined;
    getLines(options?: IGetterOptions): Promise<IOrderLine[]>;
    setFulfilmentStatus(fulfilmentState: ISKOSConcept): void;
    getClient(options?: IGetterOptions): Promise<IAgent | undefined>;
    getOrderStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setOrderStatus(orderState: ISKOSConcept): void;
    addLine(line: IOrderLine): void;
    getPaymentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setSaleSession(saleSession: ISaleSession): void;
    getDate(): string | undefined;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    setNumber(number: string): void;
    setPaymentStatus(paymentState: ISKOSConcept): void;
    setClient(client: IAgent): void;
}
//# sourceMappingURL=Order.d.ts.map