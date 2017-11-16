'use strict';

module.exports = app => {
    class model extends app.Controller {
      *showAll() {
        const { ctx, service } = this;
        this.ctx.body = yield service.model.index();
      }
    }
    return model;
  };
  