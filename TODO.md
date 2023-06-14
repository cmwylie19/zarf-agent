# Initial POC
- Zarf Agent could be an `initContainer` in `deploy/zarf-docker-registry` so that it can be ready when the Zarf State/Private-registry secrets are created so their saved to state.

- If not an `initContainer` it could call the kube-apiserver directly or use `@kubernetes/client-node` (which may bloat) to get the secrets.

- When `po`,`deploy`,`rs`,`ds`,`sts`,`job`,`cj` is created, Zarf Agent must be able to mutate the `imagePullSecrets` and `image` to use the internal registry.

**initial high level flow**
* Get Zarf State from secret
  * Store Zarf State in Class
* Mutate image with internal registry image (w/ Zarf State)
* Add imagePullSecret for internal registry (w/ `private-registry` secret)
* get `private-registry` from zarf ns and deploy it to application namespaces (talk through :6443 or `K8s` client - worried about bloat)


## Additional RBAC
- Create secrets in any namespace (imagePullSecret deployment to target namespace)
