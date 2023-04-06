const express = require('express');

const app = express();

//Middlewares
app.use((req, res, next) => {
    console.log("Inside middleware");
    next();
})

app.use((req, res, next) => {
    res.send('<h1>Hello from express!</h1>')
})

app.listen(3000, () => {
    console.log("Server is listening on PORT 3000")
})