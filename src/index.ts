import * as express from "express"
const app = express();

app.use('/hello', (req: express.Request, res: express.Response) => res.send("Hello World"))
app.use('/playground', (req: express.Request, res: express.Response) => res.sendFile(__dirname + '/spielfeldIsometric.html'))

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, () => {
    console.log("Application is up and running on Port 3000");
})