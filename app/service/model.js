'use strict';

module.exports = app => {
  class model extends app.Service {
    *index() {
      const ModelList = yield this.ctx.model.Model.find({});
      return ModelList;
    }
  }
  return model;
};
