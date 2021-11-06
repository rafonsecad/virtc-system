import express from 'express';

const app = express();

const port = process.env.VTC_PORT || 9090;

app.get('/', (req, res) => {
    res.send({
        nombre: 'a',
        detalles: 'no',
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});
