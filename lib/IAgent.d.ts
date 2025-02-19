import WebsiteOwner from "./WebsiteOwner.js";
import SocialMediaOwner from "./SocialMediaOwner.js";
import AddressOwner from "./AddressOwner.js";
import EmailOwner from "./EmailOwner.js";
import PhoneNumberOwner from "./PhoneNumberOwner.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IAgent extends Semanticable, SocialMediaOwner, PhoneNumberOwner, AddressOwner, EmailOwner, WebsiteOwner {
    getLogo(): string | undefined;
    setLogo(logo: string): void;
}
//# sourceMappingURL=IAgent.d.ts.map