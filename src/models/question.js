import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },
})

export default mongoose.model("Question", questionSchema);