const db = require('../utils/db')

module.exports = {
    register(app){
        app.post('/addsupplier', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let nickname = req.body.nickname;
            let result = await db.insert('users', {username, password, nickname});
            res.send(result);   
        })       
    }
}