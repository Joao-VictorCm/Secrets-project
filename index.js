// DICAS:
// 1. Importar expresso e axios
// 2. Crie um aplicativo expresso e defina o número da porta.
// 3. Use a pasta pública para arquivos estáticos.
// 4. Quando o usuário acessa a página inicial ele deve renderizar o arquivo index.ejs.
// 5. Use axios para obter um segredo aleatório e passe-o para index.ejs para exibir o
// segredo e o nome de usuário do segredo.
// 6. Ouça na sua porta predefinida e inicie o servidor.


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
    
}



})

app.listen(port, () =>{
    console.log(`server rodando na porta ${port}`)
})