import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import File from '../models/fileModel.js';
import { isAuth } from '../utils.js';
import { unlink } from 'fs'

const fileRouter = express.Router();
fileRouter.get('/', expressAsyncHandler(async (req, res) => {
    const files = await File.find({});
    res.send(files);
}))

fileRouter.post('/upload', isAuth, expressAsyncHandler(async (req, res) => {
    console.log(req.user);
    if (req.files === null) {
        return res.status(500).json({ message: 'No file uploaded.' });
    }
    let files = req.files.file;
    if (!Array.isArray(files)) {
        files = [files];
    }
    const date = req.body.date;
    await files.forEach(async (f) => {
        try {
            const file = new File({
                name: f.name,
                date: date,
                updatedBy: req.user.name
            })
            await file.save();
            f.mv(`./backend/upload/${f.name}`, err => {
                if (err) {
                    return res.status(500).send(err);
                }
            })
        } catch (err) {
            return res.status(500).json({ message: 'Error' });
        }
    })
    return res.json({success: true})
}))

fileRouter.delete('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const file = await File.findById(req.params.id);
    if (file) {
        const deletedFile = await file.remove();
        unlink(`./backend/upload/${deletedFile.name}`, (err) => {
            if (err) {
                res.send({ message: 'File Not Exist' });
            } else {
                res.send({ message: 'File Deleted', file: deletedFile });
            }
        });
    } else {
        res.status(500).send({ message: 'File Not Found' });
    }
}))

fileRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const file = await File.findById(req.params.id);
    if (file) {
        res.download('./backend/upload/' + file.name, file.name)
    }
}))
export default fileRouter;