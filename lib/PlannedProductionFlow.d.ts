import IPlannedFlow from "./IPlannedFlow.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import Flow from "./Flow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedProductionFlow extends Flow implements IPlannedFlow, IPlannedProductionFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: ISuppliedProduct;
        doNotStore?: boolean;
    });
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
    setProducedProduct(producedProduct: ISuppliedProduct): void;
    getProducedProduct(options?: IGetterOptions): Promise<ISuppliedProduct | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
}
//# sourceMappingURL=PlannedProductionFlow.d.ts.map