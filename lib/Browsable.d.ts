import IEnterprise from "./IEnterprise.js";
import ICatalogItem from "./ICatalogItem.js";
export default interface Browsable {
    getMaintainers(): Promise<IEnterprise[]>;
    getItems(): Promise<ICatalogItem[]>;
    removeItem(item: ICatalogItem): void;
    addItem(item: ICatalogItem): void;
    addMaintainer(maintainer: IEnterprise): void;
}
//# sourceMappingURL=Browsable.d.ts.map