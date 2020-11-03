import express from "express";
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';



const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// All routers here start with users
app.use('/users', usersRouter);



app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))