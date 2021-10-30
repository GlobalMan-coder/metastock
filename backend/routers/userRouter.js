import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import { generateToken, isAdmin, isAuth } from '../utils.js';
const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            if (user.isVerified) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
            }else{
                res.status(401).send({message: 'Not alowed'});
            }
            return;
        }
        else {
            res.status(401).send({ message: 'Invalid password' });
        }
    }
    res.status(401).send({ message: 'Invalid user' });
}))

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    let isFirst = false;
    let count = await User.count({});
    if(count == 0)isFirst = true;
    // await User.countDocuments({}, (err, c) => {
    //     if(c == 0){ isFirst = true;}
    // })
    console.log(count, isFirst);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        isAdmin: isFirst,
        isVerified: isFirst,
    });

    const createdUser = await user.save();
    if(isFirst){
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            token: generateToken(createdUser),
        });
    }else{
        res.status(401).send({message: 'Please wait till administrator verify'})
    }
}))

userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(500).send({ message: 'User Not Found' });
    }
}));

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updateUser = await user.save();
        res.send({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser)
        })
    }
}))

userRouter.get('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const users = await User.find({}).sort({ updatedAt: -1 });
    res.send(users);
}))

userRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.isAdmin = req.body.isAdmin;
        user.isVerified = req.body.isVerified;
        await user.save();
        res.send({
            success: true
        });
    } else {
        res.status(500)({ message: 'Device Not Found' });
    }
}))

userRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        const deletedUser = await user.remove();
        res.send({ message: 'User Deleted', user: deletedUser })
    } else {
        res.status(500).send({ message: 'User Not Found' });
    }
}))

export default userRouter;