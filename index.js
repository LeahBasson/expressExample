import express from 'express'
import path from 'path'
import { config } from 'dotenv'
import exp from 'constants'
config()

const app = express()
const port = +process.env.PORT || 4000 // If the variable PORT doesnt have a value then it will use the 4000
app.use(express.static('./static'))

app.get('/',(req,res) => {
    res.status(200).sendFile(path.resolve('./static/index.html'))
})

app.get('/about',(req,res) => {
    res.status(200).sendFile(path.resolve('./static/about.html'))
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
