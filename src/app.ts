// Fazer 
// npm i -d @types/express
// npm i -d @types/cors

import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import router from "./routes";

const app = express();

app.use(express.json()); // pega body
app.use(cors());
// Para verificar se está subindo e dar uma informação útil
//app.get('/', (req, res) => res.status(200).send('rodando'))
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    next()
})

app.use(router)

export default app;


