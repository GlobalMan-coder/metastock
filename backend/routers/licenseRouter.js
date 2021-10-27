import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import License from '../models/licenseModel.js';
import { isAuth } from '../utils.js';

const licenseRouter = express.Router();

licenseRouter.get('/', expressAsyncHandler(async (req, res) => {
    const licenses = await License.find({}).sort({updatedAt: -1});
    res.send(licenses);
}))

// database initialize
licenseRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await License.remove({});
    const createdLicense = await License.insertMany(data.license);
    res.send({ createdLicense });
}));

licenseRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const license = License.findById(req.params.id);
    if (license) {
        res.send(license);
    } else {
        res.status(404).send({ message: "Product Not Found" });
    }
}))

licenseRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const license = new License({
        deviceId: req.body.deviceId,
        date: req.body.date
    });
    const createdLicense = await license.save();
    res.send(createdLicense);
}))

licenseRouter.put('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const license = await License.findById(req.params.id);
    if (license) {
        license.date = req.body.date;
        await license.save();
        res.send({
            success: true
        });
    } else {
        res.status(500).send({ message: 'Device Not Found' });
    }
}))

licenseRouter.delete('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const license = await License.findById(req.params.id);
    if (license) {
        const deletedUser = await license.remove();
        res.send({ message: 'License Deleted', licesne: deletedUser })
    } else {
        res.status(500).send({ message: 'License Not Found' });
    }
}))
export default licenseRouter;