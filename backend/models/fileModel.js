import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    date: {type: Date, unique: false},
    updatedBy: {type: String}
},{
    timestamps: true,
})

const File = mongoose.model('File', fileSchema);
export default File;