require("dotenv").config();
const express = require ("express"); //en esta instancia montamos la aplicacion

const mongoose = require("mongoose")

const app = express();

//el DB_PATH que use en este caso tuve que forzarlo en ipv4 porque no funcionaba la direccion default que es ipv6
mongoose.connect(process.env.DB_PATH) //en esta parte se realiza la conexion entre mongoose y la base de datos de mongoDB

const Auto = require("./modelo/autos")

const PORT = process.env.PORT || 3030;

//Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

app.use(express.json());  //la comunicacion se hace en formato json

app.use((req, res, next)=>{// Establece que las peticiones se establecen en formato json
    res.header("Content-type", "application/json; charset=utf8")
    next();
})

//definir los endpoint
//este GET se encarga de buscar en la base de datos todos los autos generados
app.get("/api/autos", async (req, res) => {

    const auto = await Auto.find()
    res.status(200).send(JSON.stringify(auto));
});

//este POST permite generar una carga de un auto nuevo con los campos definidos en el modelo
app.post   ("/api/autos", async (req, res) => {
    let id_auto = Auto.length;

    const datos_auto = {
        id:id_auto , ...req.body
    } 
    const auto1 =  new Auto(datos_auto)
    await auto1.save()
    res.status(201).send(JSON.stringify(auto1));
});



//Esta parte define el puerto de la conexion del server local
const server = app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});