const express = require('express');
const app = express();
app.use(express.json());
const regex=/^[a-zA-Z ]+$/;

app.get('/', (req, res) => res.send('My first Node API!'));

app.post('/', (req, res) => {
    const word= req.body.message;
    if(regex.test(word)){
        res.status(200).send(word.split(''));
    }else{
        res.status(400).send('Invalid input');
    }
});

app.listen(8080, () => {
 console.log("Server running on port 8080");
});