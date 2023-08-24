import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test',
        required: true,
    },
    responses: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        qa: [{
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

    ]
})

export default mongoose.model("Response", responseSchema);