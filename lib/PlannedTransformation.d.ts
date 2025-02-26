import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedTransformation extends SemanticObject implements IPlannedTransformation {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        transformationType?: ISKOSConcept;
        consumptionFlows?: IPlannedConsumptionFlow[];
        productionFlows?: IPlannedProductionFlow[];
        doNotStore?: boolean;
    });
    addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void;
    setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void;
    addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    getPlannedConsumptionFlows(options?: IGetterOptions): Promise<IPlannedConsumptionFlow[]>;
    getPlannedProductionFlows(options?: IGetterOptions): Promise<IPlannedProductionFlow[]>;
    setTransformationType(transformationType: ISKOSConcept): void;
}
//# sourceMappingURL=PlannedTransformation.d.ts.map