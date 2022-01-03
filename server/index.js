const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller.js')



app.post('api/onlydevs/', ctrl.createPost)
app.listen(5500, () => console.log("Server running on 5500"));