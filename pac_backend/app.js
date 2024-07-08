import express from 'express';
import bodyParser from 'body-parser';
import associadoRoutes from './routes/associadoRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/associados', associadoRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
