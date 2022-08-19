const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);
const { getNumber } = require('./controller')

app.get("/api/Number", getNumber);

const { getpet } = require('./controller')

app.get("/api/pet ", getNumber);

app.post('/submitG',(req,res) => { 
    const graves = req.body.graves
    let greenZ = ['a','b','c','d','e']
    let newGreenz = ''
    for (let i=0; i < graves.length; i++) {
        if(!greenZ.includes(graves[i])){
            newGreenZ+= graves[i]
        }
    }
    res.send(graves)
})
app.delete('api/form/graves',deleteForm)