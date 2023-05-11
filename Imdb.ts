import { Movie } from './movie';
import { Professional } from './professional';
const fs = require('fs');

export class Imdb {
    // Atributos
    peliculas: Movie[]

    // Constructor
    constructor(peliculas: Movie[]){
        this.peliculas = peliculas
    }

    // Métodos
    escribirEnFicheroJson(nombre: string): void {
        let datosE = JSON.stringify(this.peliculas)
        fs.writeFileSync(nombre, datosE)
    }
    obtenerInstanciaImdb(nombre: string) : Imdb {
        let datosO = fs.readFileSync(nombre)
        let parse = JSON.parse(datosO)
        let pelis : Movie[] = []
        for (let i = 0; i < parse.length; i++) {
            let movie = parse[i];
            let newMovie = new Movie(movie.title, movie.releaseYear, movie.nacionality, movie.genre);
            pelis.push(newMovie);
        }
        return new Imdb(this.peliculas);
    }
    
    
}