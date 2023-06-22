const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString('hex');
    return secretKey;
};

const secretKey = generateSecretKey();
app.post('/generate-token', (req, res) => {
    const user = {
        userName:  "rimes",
        password:  "rimes@132"
    }
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
        res.json({
            token
        })
    })
})


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (typeof token != 'undefined') {
        const bearer = token.split(" ");
        const Token = bearer[1]
        req.token = Token;
        next()
    } else {
        res.send({
            message: 'Token is not valid'
        })
    }
};

app.post('/verify-token', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.send({ result: "invalid token" })
        } else {
            res.json({
                message: 'profile accessed...',
                authData
            })
        }
    })
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

