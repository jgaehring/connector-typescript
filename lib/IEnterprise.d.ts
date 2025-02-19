import ProductSupplier from "./ProductSupplier.js";
import MainContactOwner from "./MainContactOwner.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import Nameable from "./Nameable.js";
import Taxable from "./Taxable.js";
import CatalogItemManager from "./CatalogItemManager.js";
import Onboardable from "./Onboardable.js";
import Describable from "./Describable.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IEnterprise extends Semanticable, TechnicalProductProposer, Taxable, Describable, Onboardable, MainContactOwner, ProductSupplier, CatalogItemManager, Nameable, CatalogMaintainer {
}
//# sourceMappingURL=IEnterprise.d.ts.map