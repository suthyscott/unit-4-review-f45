const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getColor, addColor, getAllColors, editColor} = require('./controller')

app.get('/api/color', getColor)
app.get('/api/colors', getAllColors)
app.post('/api/colors', addColor)
app.put('/api/colors/:id', editColor)

app.listen(4545, console.log(`Take us to warp 4545!`))