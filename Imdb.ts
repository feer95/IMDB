import { Movie } from './movie';

export class Imdb {
    // Atributos
    peliculas: Movie[]

    // Constructor
    constructor(peliculas: Movie[]){
        this.peliculas = peliculas
    }
}