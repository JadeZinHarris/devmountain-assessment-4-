module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
   
}
module.exports = {
    getFortune: (req, res) => {
        const fortune = ["You're lucky today","1 to 1 you'll do amazing", "Bad fortune", "Luck is in your favor", "you'll do well."];
    
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    }
}
module.exports ={
    deleteForm: (req,res) => {
        let index = form.findIndex((form) => {
            return form.id === +req.params.id
        })
    }
}

module.exports = {

    getNumber: (req, res) => {
        const number = ['1','2','3','7','9','11'];
      
        
        let randomIndex = Math.floor(Math.random() * number.length);
        let randomNumber = number[randomIndex];
      
        res.status(200).send(randomNumber);
    }
   
}


module.exports = {

    getPet: (req, res) => {
        const number = ['Dog','Cat','Bird','Turtle','Snake','Rabbit'];
      
        
        let randomIndex = Math.floor(Math.random() * pet.length);
        let randomPet = pet[randomIndex];
      
        res.status(200).send(randomPet);
    }
   
}