const express = require('express');


const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Genius Car is Running");
});


app.listen(port, () => {
    console.log("Genius car is running in port", port);
});
