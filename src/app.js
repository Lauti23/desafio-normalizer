const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080;
const { Server } = require('socket.io')

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HANDLEBARS
const handlebars = require('express-handlebars');
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "public/views")


const server = app.listen(PORT, () => console.log("Server Up"))

const io = new Server(server);


app.get('/', (req, res) => {
    res.render("main")
})







