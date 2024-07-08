import express from 'express';
import bodyParser from 'body-parser';
import associadoRoutes from './routes/associadoRoutes.js';
import mysql from 'mysql';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/associados', associadoRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'UniversoDown',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

export default app;
