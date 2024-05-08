const express = require('express');
const app = express();
app.use(express.json());
const regex=/^[a-zA-Z ]+$/;

app.get('/', (req, res) => res.send('My first Node API!'));

app.post('/', (req, res) => {
    const word= req.body.message;
    normalword=word.split('')
    lowerWord=word.toLowerCase();
    division=lowerWord.split('');

    for (let index = 0; index < division.length; index++) {
        if(division[index]!=" "){
        division[index]=[normalword[index],"https://img.icons8.com/ios/50/sign-language-"+division[index]+".png"]
        }else{
            division[index]=[division[index],null]
        }
    }
    if(regex.test(word)){
        res.status(200).send(division);
    }else{
        res.status(400).send('Invalid input');
    }
});

app.listen(8080, () => {
 console.log("Server running on port 8080");
});