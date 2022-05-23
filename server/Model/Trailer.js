import mongoose from "mongoose";

const TRAILER_SCHEMA = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    director:{
        type: String,
        required: true,
        trim: true
    },
    actors: {
        type: [String],
        required: true,
        trim: true
    },
    Data: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    cover: {
        type: String,
        public_id: String,
        required: true,
        trim: true
    }
});

export default mongoose.model("Trailer", TRAILER_SCHEMA);