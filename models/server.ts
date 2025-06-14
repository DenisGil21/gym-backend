import express, { Application }  from "express";
import userRoutes from "../routes/usuario";
import cors from 'cors';
import db from "../db/connection";
import Usuario from "./usuarios";
import Rutina from "./rutinas";
import Ejercicio from "./ejercicios";
import errorHandler from "../middlewares/error-handler";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        this.dbConnection();
        this.middlewares();
        this.routes();
        this.errorHandling();
    }

    private routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    private middlewares(){
        // CORS
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //Carpeta pública
        this.app.use(express.static('public'));
    }

    private errorHandling(){
        //manejador de errores
        this.app.use(errorHandler);
    }

    async dbConnection(){
        try {
            await db.authenticate();
            // await Usuario.sync({ force: true });
            // await Rutina.sync({ force: true });
            // await Ejercicio.sync({ force: true });
            // await db.sync({force: true})
            console.log('db up');
            
        } catch (error) {
            throw new Error(error as string);
        }
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo ${ this.port}` );
            
        })
    }
}

export default Server;