const userController = {}
const userDao = require('../dao/user.dao')
userController.usercreate = (req, res) => {

    // const url = req.protocol + '://' + req.get('host')

    // let user = {
    //     name: req.body.name,
    //     avatar: url + '/public/' + req.file.filename,
    //     discription: req.body.discription,
    //     hobby: req.body.hobby
    // }
    // console.log("request data check .....", user)
    userDao.adduser(req).then(result => {
        console.log(result);
        res.status(201).json({ result })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

}

module.exports = userController;