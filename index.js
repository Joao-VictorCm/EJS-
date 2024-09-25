import express from "express"

const app = express()
const port = 3000


app.get("/", (req, res) =>{
    const today = new Date()
    const day = today.getDay()

    const horas = new Date()
    

    let type = "a weekday"
    let adv = "It is time to work hard"

    if(day === 0 || day === 6){
        type = "The weekend"
        adv = "it is time to have some fun"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
        horas : horas
    })
})



app.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})