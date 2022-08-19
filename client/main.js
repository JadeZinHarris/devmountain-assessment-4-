const complimentBtn = document.getElementById("ComplimentButton")

getCompliment = () =>{
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("FortuneButton")

getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const ds = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)



const form = document.getElementById("grey")

function formDays(event){
    event.preventDefault()

    ele = {
        graves: document.getElementById("graves"),value
    }  

    axios.post("http://localhost:4000/submitG/",ele)
    .then ((response) => {
        console.log(response.data)
    })
   
};

form.addEventListener('click', formDays)



const LuckyBtn = document.getElementById("LuckyButton")

getNumber = () => {
    axios.get("http://localhost:4000/api/Number/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

LuckyBtn.addEventListener('click', getNumber)

const pet = document.getElementById("GuessingButton")

getPet= () => {
    axios.get("http://localhost:4000/api/pet/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

petBtn.addEventListener('click', getPet)
