'use strict';

module.exports = app => {
  class post extends app.Service {
    *index() {
      const PostlList = yield this.ctx.model.Post.find({});
      let { pageSize, page, ...other } = this.ctx.query
      pageSize = pageSize || 10
      page = page || 1
  
      let newData = PostlList
      for (let key in other) {
        if ({}.hasOwnProperty.call(other, key)) {
          newData = newData.filter((item) => {
            if (key in item) {
              return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
            }
            return true
          })
        }
      } 
      return {      
        data: newData.slice((page - 1) * pageSize, page * pageSize),
        total: newData.length,
      };
    }
  }
  return post;
};
