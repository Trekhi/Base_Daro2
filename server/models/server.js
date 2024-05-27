const express = require("express"); // levanta servicio de express
const cors = require("cors"); //instanciacion del cors

const mongoconnection = require("../database/connection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.pathsMongo = {
      prueba: "/mongo",
      heroe: "/heroes",
      pelicula: "/peliculas",
      castings: "/cast",
      multimediaPelicula: "/multimediaP",
      multimediaHeroe: "/multimediaH"
    };

    this.mongoconnection();
    //Middlewares
    this.middlewares();
    //Routes
    this.routesM();
  }

  async mongoconnection() {
    await mongoconnection();
  }

  routesM() {
    this.app.use(this.pathsMongo.prueba, require("../routes/prueba"));
    this.app.use(this.pathsMongo.heroe, require("../routes/heroes"));
    this.app.use(this.pathsMongo.pelicula, require("../routes/peliculas"));
    this.app.use(this.pathsMongo.castings, require("../routes/castingPeliculas"));
    this.app.use(this.pathsMongo.multimediaPelicula, require("../routes/multimediaPelicula"));
    this.app.use(this.pathsMongo.multimediaHeroe, require("../routes/multimediaHeroe"));
    
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("SERVIDOR CORRIENDO EN PUERTO", this.port);
    });
  }
}

module.exports = Server;
