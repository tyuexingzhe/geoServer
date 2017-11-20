'use strict'

var Mock = require('mockjs')

module.exports = app => {
    class resource extends app.Service {
        async index() {
            const ResourceList = await this.ctx.model.Resource.find({});
            let { pageSize, page, ...other } = this.ctx.query
            pageSize = pageSize || 10
            page = page || 1
        
            let newData = ResourceList
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

        async showResource(id){
          const database = await this.ctx.model.Resource.find({})
          const data = this.ctx.helper.queryArray(database, id, 'id')
          if(data){
            this.ctx.response.status = 200
            this.ctx.body = data
          }else{
            this.ctx.response.status = 400
          }
        }
        async updateResource(){
          const newData = this.ctx.request.body
          var d = new Date();
          newData.createTime =d.toLocaleString();
          newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', newData.name.substr(0, 1))
          newData.id = Mock.mock('@id')
          console.log(newData)
          await this.ctx.model.Resource.update(newData);

          this.ctx.status = 200
        }

        async removeResource(id){
          const database = await this.ctx.model.Resource.find({})
          const data = this.ctx.helper.queryArray(database, id, 'id')
          if(data){
            this.ctx.response.status =200
            await this.ctx.model.Resource.remove({id:id})
          }else{
            this.ctx.response.status =400
          }
        }

        async patchResource(id,body){

          const editItem = body
          const data = await this.ctx.model.Resource.find({id : id})
          var d = new Date();
          editItem.createTime =d.toLocaleString();

          console.log(editItem)
          await this.ctx.model.Resource.update({id:id},editItem)
          if(data){
            this.ctx.response.status =200
          }else{
            this.ctx.response.status = 400
          }
        }
    }
    return resource
}