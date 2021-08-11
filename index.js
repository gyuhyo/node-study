const express = require('express');
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require('./models/User')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


/*********************************
 * Router
 *********************************/
app.get('/', (req, res) => res.send('HelloWorldasdasd'))

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보를 Client에서 가져오면 데이터베이스에 저장
    const user = new User(req.body);
    user.save((err, userinfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))