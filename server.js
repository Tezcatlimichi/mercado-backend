const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const ArtRouter = require('./routes/ArtRouter')
const CommunityRouter = require('./routes/CommunityRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
// routes
app.get('/', (req, res) => res.json({ message: 'Server ON' }))
app.use('/art', ArtRouter)
app.use('/community', CommunityRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
