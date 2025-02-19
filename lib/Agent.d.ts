import IAgent from "./IAgent.js";
import IAddress from "./IAddress.js";
import IPhoneNumber from "./IPhoneNumber.js";
import ISocialMedia from "./ISocialMedia.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default abstract class Agent extends SemanticObject implements IAgent {
    protected connector: IConnector;
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        localizations?: IAddress[];
        phoneNumbers?: IPhoneNumber[];
        emails?: string[];
        websites?: string[];
        socialMedias?: ISocialMedia[];
        logo?: string;
        doNotStore?: boolean;
    });
    setLogo(logo: string): void;
    getEmails(): string[];
    getWebsites(): string[];
    getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]>;
    removeEmailAddress(emailAddress: string): void;
    removeWebsite(website: string): void;
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    addSocialMedia(socialMedia: ISocialMedia): void;
    addLocalization(localization: IAddress): void;
    getLogo(): string | undefined;
    removeLocalization(localization: IAddress): void;
    addEmailAddress(emailAddress: string): void;
    getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]>;
    getLocalizations(options?: IGetterOptions): Promise<IAddress[]>;
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
    addWebsite(website: string): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
}
//# sourceMappingURL=Agent.d.ts.map