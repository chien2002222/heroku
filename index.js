const http = require("http")
const port = process.env.PORT || 3000

const app = http.createServer((req, res)=>{
    res.write("<h1> Hello world</h1>")
    res.write(
        "<h2>My nodejs web page has been deployed to Heroku</h2>"
    )
    res.end()
    app.listen(port)
})