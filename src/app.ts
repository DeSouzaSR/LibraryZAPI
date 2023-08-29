// Fazer 
// npm i -d @types/express
// npm i -d @types/cors

import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json()); // pega body
app.use(cors());
// Para verificar se está subindo e dar uma informação útil
//app.get('/', (req, res) => res.status(200).send('rodando'))

export default app;


