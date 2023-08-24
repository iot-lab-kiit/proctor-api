import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
    full_marks: {
        type: Number,
        required: true,
    },
    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Question',
        required: true,
    }
})

export default mongoose.model("Test", testSchema);