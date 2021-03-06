import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import licenseRouter from './routers/licenseRouter.js';
import userRouter from './routers/userRouter.js';
import fileRouter from './routers/fileRouter.js';
import clientRouter from './routers/clientRouter.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }))
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGDB_URL || 'mongodb://localhost/metastock', {
    autoCreate: true,
    autoIndex: true
})
.then(() => {
    console.log("Success mongodb connected");
})

app.use('/api/user', userRouter);
app.use('/api/license', licenseRouter);
app.use('/api/file', fileRouter);
app.use('/api/client', clientRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})