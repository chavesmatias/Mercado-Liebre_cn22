const express = require ('express')
const app = express ()

app.get ('/', function (req, res) {
    res.sendFile (__dirname + '/Views/index.html')
})
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/' + req.url)
});


app.listen (3000, function () {
    console.log ('Para entrar al sitio ingresa a LocalHost:3000')
})

