//import Pods from "lib/hooks/pods/pods";
const pod;

When(a.Pod)
    .isCreatedOrUpdated()
    .Then(async request => {
        pod = new Pod(request)
        if (pod.hasIgnoreLabels()) {
            // bail
            return
        } else {
            await pod.deployImagePullSecret()
            await pod.replaceImage()
            await pod.addImagePullSecret()
            await pod.addUpdatedAnnotation()

        }
    })