// Daniel Lee 100517557

const express = require('express');
const app = express();
const router = express.Router();
const users = require(__dirname + '/user.json');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', function (req, res) {
    var fs = require('fs');
    if (!__dirname + '/home.html') {
        fs.appendFile(__dirname + 'home.html', '<html><body><h1>Welcome to ExpressJs Tutorial</h1></body></html>', (err, /*fd*/) => {
            if (err) { throw err; }
        })
/*        fs.close(fd, (err) => {
            if (err) { throw err; }
        })*/
    }    
    res.sendFile(__dirname + '/home.html');    
})


/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
    res.send(JSON.stringify(users));
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send resonse as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send resonse as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req, res) => {
    if (req.query.username == users.username && req.query.password == users.password) {
        res.send("User is Valid!");
    }
    else if (req.query.username != users.username) {
        res.send("Username is Invalid!");
    }
    else if (req.query.password != users.password) {
        res.send("Password is Invalid!");
    }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req, res) => {
  //res.setHeader('Content-type', 'text/html')
    res.send('<b>' + req.query.username + ' successfully logged out!</b>');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));