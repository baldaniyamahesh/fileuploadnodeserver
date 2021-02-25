const User = require('../models/users');
const userDao = {}


userDao.adduser = (req) => {
    return new Promise((resolve, reject) => {
        const url = req.protocol + '://' + req.get('host')
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            avatar: url + '/public/' + req.file.filename,
            discrition: req.body.discrition,
            hobby: req.body.hobby
        });

        user.save((err, founduser) => {
            if (err) {
                console.log("error some occure!!")
            }
            resolve({ "message": "user Found succesfully", user: founduser })

        })


    })
}



module.exports = userDao;