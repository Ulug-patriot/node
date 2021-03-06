const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const appRouter = require('./router')
require('./prod')(app);
const config = require('config')

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://koinot:koinot2889@cluster0.nfkoj.mongodb.net/koinot?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => {
        console.log('Bazaga ulandi')
    })
    .catch((err) => {
        console.log(err)
    })


app.use('/', appRouter)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`${port}chi port ishga tushdi`)
})

