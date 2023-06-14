import Hooks from '../hooks';

export default class Pods extends Hooks {
    constructor(public request: any) {
        super(request)
    }

    replaceImage(): void {
    }

    addImagePullSecret(): void {
    }

    deployImagePullSecret(): void {
    }

    addUpdatedAnnotation(): void {
    }

}