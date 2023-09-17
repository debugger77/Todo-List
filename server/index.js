import express from 'express';
import cors from 'cors';
//import bodyParser from 'body-parser';            bodyParser is the helper package of the express

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', Routes);                              //Calling of the Routes should be after json & urlencoded 

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));