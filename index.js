const  express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './', 'public')))



app.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname, './', '/views/index.html'));
})

app.get('/contact',(req, res, next) => {
    res.sendFile(path.join(__dirname, './', '/views/contact.html'));
})

app.get('/properties',(req, res, next) => {
    res.sendFile(path.join(__dirname, './', '/views/properties.html'));
})

app.get('/property-details',(req, res, next) => {
    res.sendFile(path.join(__dirname, './', '/views/property-details.html'));
})

app.listen(8000, function() {
    console.log("server is listening on port 8000");
})