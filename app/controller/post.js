'use strict';

module.exports = app => {
    class post extends app.Controller {
      *showAll() {
        const { ctx, service } = this;
        this.ctx.body = yield service.post.index();
      }
    }
    return post;
  };
  