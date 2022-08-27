const mongoose = require("mongoose")
const moongoseDelete =require('moongose-delete')
const TracksSchema = new mongoose.Schema(
    {
name: {
    type:String,
},
album: {
    type:String,
},
cover: {
    type:String,
    validate:{
        validator:(req) => {
            return  true;
        },
        message: "EROR_URL",

    },
},
artist: {
    name: {
type: String,
    },
   nickname: {
    type: String,
   },
   nationality: {
    type: String,
   },
},
duration: {
 start: {
    type: Number,
 },
 end: {
    type: Number,
 },
},
mediaId: {
    type: mongoose.Types.ObjectId,
},
    },
    {
timestamps:false, //TODO createdAt, updatedAt
versionKey:true

    }
)
TracksSchema.plugin(moongoseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("tracks",TracksSchema)