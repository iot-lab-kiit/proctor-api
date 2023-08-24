import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test',
        required: true,
    },
    answers: {
        type: [{
            question: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question',
                required: true,
            },
            answer: {
                type: String,
                required: true,
            }
        }]
    }
    
})

export default mongoose.model("Answer", answerSchema);