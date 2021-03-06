const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('main.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})