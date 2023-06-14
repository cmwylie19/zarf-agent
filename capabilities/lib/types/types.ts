// Part we care about in Zarf State
export interface ZarfState {
    registryInfo: RegistryInfo;
}

// Found in Zarf State
interface RegistryInfo {
    pushUsername: string;
    pushPassword: string;
    pullUsername: string;
    pullPassword: string;
    address: string;
    nodePort : number;
    internalRegistry: boolean;
    secret: string;
}


