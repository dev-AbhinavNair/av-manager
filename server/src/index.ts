import express, {Response,Request, response } from "express";


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'AV Manager API is running' })
})



app.listen(port , ()=>{
    console.log(`the server is up and running on ${port}`)
})