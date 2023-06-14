# Initial POC

_The goal is to implement the Zarf Agent in Pepr utilizing dependency injection to loosely couple hook implementations of objects like pods and flux._ **For the initial vertical,the focus is on  pod logic.**

_High Level Overview_:
* Zarf Agent needs to be deployed before Zarf deploys artifacts.

  * Pods - Agent must mutate the `imagePullSecrets` and `image` to use the internal registry.

    * `imagePullSecrets` - The agent will recreate `private-registry` secret in the pod namespace before adding it to the pod.

**Checklist**  

Step 1:
- [ ] Get Zarf State from secret
- [ ] Store Zarf State in Class

Step 2:
- [ ] Get Pod without ignore labels/annotations
- [ ] Deploy imagePullSecret to pod namespace
- [ ] Mutate pod with imagePullSecret
- [ ] Mutate pod with internal registry image


_715mg CD-ROM is the goal_

