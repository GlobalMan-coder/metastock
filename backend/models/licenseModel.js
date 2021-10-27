import mongoose from 'mongoose';

const licenseSchema = new mongoose.Schema({
    deviceId: {type: String, required: true, unique: true},
    date: {type: Date, required: true},
},{
    timestamps: true,
})

const License = mongoose.model('License', licenseSchema);
export default License;