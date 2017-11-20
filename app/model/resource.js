'use strict';

module.exports = app=>{
    const mongoose = app.mongoose;
    const ResourceSchema = new mongoose.Schema({
        id: { type: String, required: true },
        name: { type: String,required:true },
        nickName : { type: String, required: true },
        phone : { type: String, required: true },
        hardware : { type: String, required: true },
        software : { type: String, required: true },
        location :{type: String, required: true},
        isUsed :{type: Boolean, required: true},
        email :{ type: String, required: true },
        createTime :{ type: String, required: true },
        avatar: { type: String, required: true },
    })
    return mongoose.model('Resource',ResourceSchema);
}