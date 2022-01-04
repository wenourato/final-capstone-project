const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller.js')

app.get('/api/onlydevs/', ctrl.getPost)
app.post('/api/onlydevs/', ctrl.createPost)
app.delete('/api/onlydevs/:id', ctrl.deletePost)
app.listen(4500, () => console.log("Server running on 4500"));