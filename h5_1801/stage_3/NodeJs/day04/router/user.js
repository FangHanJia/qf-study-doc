const db = require('../utils/db')

module.exports = {
    register(app){
        app.post('/register', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let nickname = req.body.nickname;
            let result = await db.insert('user', {username, password, nickname});
            res.send(result);   
        })

        app.post('/login', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let result = await db.select('user', {username, password});  
            if(result.status){
                req.session.user = result.data[0];
            }
            res.send(result);          
        })
    }
}