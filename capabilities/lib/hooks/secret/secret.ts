import { ISecret, RegistryInfo, AuthData } from '../../types/secret/types';

export class ImageRegistry implements ISecret {
    registryInfo: RegistryInfo;
    regcred: AuthData;

    constructor() {}

    populateRegistryInfo(registryInfo: RegistryInfo) {
        this.registryInfo = registryInfo;
    }

    populateRegCred(regcred: AuthData) {
        this.regcred = regcred;
    }

    async deployRegCred(): Promise<void> { }
}