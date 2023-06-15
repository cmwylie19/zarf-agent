// for creating private-registry secret in application namespace
interface AuthData {
    auths: {
      [key: string]: AuthInfo;
    };
}
  
interface AuthInfo {
    auth: string;
}

// for mutating the image in the pod
export interface RegistryInfo {
    pushUsername: string;
    pushPassword: string;
    pullUsername: string;
    pullPassword: string;
    address: string;
    nodePort : number;
    internalRegistry: boolean;
    secret: string;
}

// Save private-registry secret
export interface ISecret {
    // registryInfo from zarf-sate secret contents
    registryInfo?: RegistryInfo;
    // private-registry secret contents
    regcred?: AuthData;
    // Deploy regCred in application namespace
    deployRegCred(): Promise<void>;
    // read state from file and populate
    populateRegistryInfo(registryInfo: RegistryInfo): void;
    // read .dockerconfigjson from file and populate
    populateRegCred(regcred: AuthData): void;
}

