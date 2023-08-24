import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    roll: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        required: true
    },
    macAddress: {
        type: String,
        required: true
    }
})

export default mongoose.model("User", userSchema);