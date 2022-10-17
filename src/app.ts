import express, { Request, Response } from "express";
const app = express();

app.use('/', (req:Request, res:Response) => {
    res.send('안녕')
})

app.listen(3000, () => {
    console.log('안녕')
})