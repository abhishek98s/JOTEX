import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    jobName: {
        type: String,
        required: [true, 'Job name is required'],
        minlength: 5,
    },
    experience: {
        type: String,
        required: [true, 'Job name is required'],
        minlength: 5,
    },
    type: {},
    salary: {},
    category: {
        type: String,
        required: [true, 'Please provide your job category'],
    },
}, { timestamps: true })

const Job = mongoose.model('Job', jobSchema);

export default Job;