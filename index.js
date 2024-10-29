import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://secrets-api.appbrewery.com/random"

app.use(express.static("public", {
    setHeaders: (res, path) =>{
        if(path.endsWith(".css")){
            res.set("Content-Type", "text.css")
        }
    }
}))


app.get("/", async (req, res) =>{

try {
    const result = await axios.get(API_URL)
    const data = result.data
    console.log(data)
    res.render("index.ejs", {secrets: data})
    
} catch (error) {
    res.render("index.ejs",  { content: JSON.stringify(error.response.data) })
}
})

app.listen(port, () =>{
    console.log(`server rodando na porta ${port}`)
})