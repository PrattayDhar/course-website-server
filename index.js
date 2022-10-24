const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


app.use(cors());
const cetagory = require('./data/ctagory.json')
const course = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Hasan bolda')
})
app.get('/course-cetagory', (req, res) => {
    res.send(cetagory)
})
app.get('/course', (req, res) => {
    res.send(course)
})
app.get('/cetagory/:id', (req, res) => {
    const id = req.params.id;
    const cetagory_course = news.filter(n => n.category_id == id)
    res.send(cetagory_course)

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})