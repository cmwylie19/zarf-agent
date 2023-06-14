export default class Hooks {
    // Request type from Pepr Core
    // not really using any
    constructor(public request: any) {}

    hasIgnoreLabels(): boolean {
        return this.request.Raw.metadata?.annotations?.["zarf.dev/agent"] === "ignore" ? true : false;

    }
}