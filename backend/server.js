import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import licenseRouter from './routers/licenseRouter.js';
import userRouter from './routers/userRouter.js';
import fileRouter from './routers/fileRouter.js';
import clientRouter from './routers/clientRouter.js';
import fileUpload from 'express-fileupload';
dotenv.config();
const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }))
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGDB_URL || 'mongodb://localhost/metastock', {
    autoCreate: true,
    autoIndex: true
})

app.use('/api/user', userRouter);
app.use('/api/license', licenseRouter);
app.use('/api/file', fileRouter);
app.use('/client', clientRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res) => {
    res.status(500).send({ message: err.message });
})

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})