import {
  Capability,
  PeprRequest,
  RegisterKind,
  a,
  fetch,
  fetchStatus,
} from "pepr";


export const SecretHandler = new Capability({
    name: "secret-handler",
    description: "Saves the zarf-state, and private registry-secret to state.",
    namespaces: ["zarf"], // empty array means all namespaces
});

// Use the 'When' function to create a new CapabilityAction
const { When } = SecretHandler;

/**
 * ---------------------------------------------------------------------------------------------------
 *                                   CAPABILITY ACTION (Namespace)                                   *
 * ---------------------------------------------------------------------------------------------------
 *
 * This Capability Action removes the label `remove-me` when a Namespace is created.
 * Note we don't need to specify the namespace here, because we've already specified
 * it in the Capability definition above.
 */

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