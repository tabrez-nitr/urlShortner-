import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    originalUrl : {
        type : String, 
        required : true,
    },
    shortUrl : {
        type : String,
        unique : true,
    },
    visitTrack : [
        {
           
        }
    ]
})

const Url = mongoose.model("url" , urlSchema);

export default Url;

