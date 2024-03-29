import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', _ => console.log("Database is synced"));
mongoose.connection.on('error', _ => console.log("Database error"));

const { Schema, model } = mongoose;

const qxSchema = Schema({
    username: { type: String },
    letters: [String],
    userid: { type: String },
    email: { type: String },
    flag: { type: String },
    custom: { type: String },
    sigs: [String],
    types: [String]
})

const qxClientModel = model('qxClientModel', qxSchema)

export default qxClientModel