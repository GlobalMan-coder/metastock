import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import License from '../models/licenseModel.js';
import File from '../models/fileModel.js';

const clientRouter = express.Router();
clientRouter.get('/license/:deviceId', expressAsyncHandler(async (req, res) => {
    const license = await License.findOne({ deviceId: req.params.deviceId })
    if (license) {
        res.send(license.date);
    } else {
        res.status(500).send({ message: "The device not registered" });
    }
}))

clientRouter.get('/fileList/:deviceId', expressAsyncHandler(async (req, res) => {
    const files = await File.find({})
        .select({ name: 1, date: 1, _id: 0 });
    if (files && files.length > 0) {
        res.send(files);
    } else {
        res.status(500).send({ message: "File not exist" });
    }
}))

clientRouter.get('/file/:deviceId/:fileName', expressAsyncHandler(async (req, res) => {
    const license = await License.findOne({ devicedId: req.params.deviceId });
    if (license) {
        if (license.date < new Date()) {
            res.status(500).send({ message: "License is expired." })
        }
        else {
            try {
                res.download('./backend/upload/' + req.params.fileName, req.params.fileName)
            } catch (err) {
                res.status(500).send({ message: "Internal Error" });
                console.log(err);
            }
        }
    } else {
        res.status(500).send({ message: "This device is not registered" });
    }
}))
export default clientRouter