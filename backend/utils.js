import jwt from 'jsonwebtoken'
export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
    },
        // eslint-disable-next-line no-undef
        process.env.JWT_SECRET || 'sumoysecret',
        {
            expiresIn: '30d',
        })
}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(
            token,
            // eslint-disable-next-line no-undef
            process.env.JWT_SECRET || 'sumoysecret',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invallid Token.' });
                } else {
                    req.user = decode;
                    if(req.user.isVerified){
                        next();
                    }
                    else{
                        res.status(401).send({message: 'The user is not allowed.'})
                    }
                    
                }
            }
        )
    } else {
        res.status(401).send({ message: 'No Token' });
    }
}

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
};