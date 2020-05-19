const express = require('express')
const path = require('path')

const app = express()

// Set Static Folder Frontend
app.use(express.static(path.join(__dirname, 'public')))

// Set Server Port
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT)
})