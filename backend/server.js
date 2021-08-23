const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require('./models/User')


mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log("Mongodb connection established successfully")
})

const PORT = 4000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    User.find((err, user) => {
        if (err) {
            console.log(err)
        } else {
            res.json(user)
        }
    })
})

app.post("/register", (req, res) => {
    const user = new User(req.body)
    user.save().then((user) => {
        res.json(user)
    }).catch(err => {
        res.status(500).send(err.message)
    })
})

app.get("/:id", (req, res) => {
    const id = req.params.id
    User.findById(id, (err, user) => {
        res.json(user)
    })
})

app.post("/:id", (req, res) => {
    const id = req.params.id
    User.findById(id, (err, user) => {
        if (!user) {
            res.status(404).send("User not found!")
        } else {
            user.firstName = req.body.firstName
            user.middleName = req.body.middleName
            user.lastName = req.body.lastName
            user.address = req.body.address
            user.email = req.body.email
            user.number = req.body.number
            user.birthplace = req.body.birthplace
            user.sex = req.body.sex
            user.province = req.body.province
            user.city = req.body.city
            user.zip = req.body.zip
            user.save().then(todo => {
                res.json(todo)
            }).catch(err => res.status(500).send(err.message))
        }
    })
})


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})