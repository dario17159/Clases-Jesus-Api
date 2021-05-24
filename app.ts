import dotenv from "dotenv";
import Server from './models/server';

// Configurar nuestras variables de entorno
dotenv.config();

// Inicializamos nuestro server
const server = new Server();

// Ponemos a escuchar nuestro servidor
server.listen();