import mongoose from 'mongoose';

async function connectDB (url){
    return  mongoose.connect(url)
    .then(()=> console.log("Connected to DB"))
    .catch((err)=> console.log(err));
}

export { connectDB };