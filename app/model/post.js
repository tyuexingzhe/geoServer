'use strict';

module.exports = app=>{
    const mongoose = app.mongoose;
    const PostSchema = new mongoose.Schema({
        status:{type: Number, required: true},
        title: { type: String, required: true },
        author: { type: String, required: true },
        categories: { type: String, required: true },
        tags: { type: String, required: true },
        views:{type: Number, required: true},
        comments:{type: Number, required: true},
        environment:{ type: String, required: true },
        date:{ type: String, required: true },
        id: { type: Number, required: true },
        visibility:{ type: String, required: true },
        image:{ type: String, required: true }, 
    })
    return mongoose.model('Post',PostSchema);
}