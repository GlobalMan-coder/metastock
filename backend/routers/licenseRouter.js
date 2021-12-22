import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import License from '../models/licenseModel.js';
import { isAuth } from '../utils.js';

const licenseRouter = express.Router();

licenseRouter.get('/', expressAsyncHandler(async (req, res) => {
    const licenses = await License.find({}).sort({updatedAt: -1});
    res.send(licenses);
}))

licenseRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const license = License.findById(req.params.id);
    if (license) {
        res.send(license);
    } else {
        res.status(500).send({ message: "Product Not Found" });
    }
}))

licenseRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const license = new License({
        deviceId: req.body.deviceId,
        clientName: req.body.clientName || "",
        date: req.body.date,
        updatedBy: req.user.name
    });

    const createdLicense = await license.save();
    res.send(createdLicense);
}))

licenseRouter.put('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const license = await License.findById(req.params.id);
    if (license) {
        license.clientName = req.body.clientName || license.clientName;
        license.date = req.body.date;
        license.updatedBy = req.user.name;
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
        const deletedLicense = await license.remove();
        res.send({ message: 'License Deleted', license: deletedLicense })
    } else {
        res.status(500).send({ message: 'License Not Found' });
    }
}))
export default licenseRouter;