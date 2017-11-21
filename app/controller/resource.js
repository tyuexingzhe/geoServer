'use strict'

module.exports = (app) => {
    class resource extends app.Controller {
        async showAll() {
            const {
                ctx,
                service
            } = this;
            this.ctx.body = await service.resource.index();
        }

        async showResource() {
            const {
                ctx,
                service
            } = this;
            await service.resource.showResource(ctx.params.id);
        }

        async updateResource() {
            const {
                ctx,
                service
            } = this;
            await service.resource.updateResource();
        }

        async removeResource() {
            const {
                ctx,
                service
            } = this
            await service.resource.removeResource(ctx.params.id);
        }

        async patchResource(){
            const{
                ctx,
                service
            } = this
            await service.resource.patchResource(ctx.params.id,ctx.request.body)
        }

        async removeResources(){
            const{
                ctx,
                service
            } = this
            const { ids } = ctx.request.body
            await service.resource.removeResources(ids)
        }
    }
    return resource
}