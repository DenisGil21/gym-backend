import express, { Application }  from "express";
import userRoutes from "../routes/usuario";
import cors from 'cors';
import db from "../db/connection";

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
        this.moddlewares();
        this.routes();
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    moddlewares(){
        // CORS
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //Carpeta pública
        this.app.use(express.static('public'))
    }

    async dbConnection(){
        try {
            await db.authenticate();
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