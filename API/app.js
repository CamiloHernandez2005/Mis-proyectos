const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//RUTA
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

//MENSAJE AL ENTRAR
app.get('/', (req, res) => {
    res.send('Prueba 1');
});

//CONEXION BASE DE DATOS MONGODB
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://DrKmilo:Simona2627@cluster0.0ujo0fp.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        app.listen(1000);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();