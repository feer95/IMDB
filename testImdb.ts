import { Movie } from './movie';
import { Imdb } from './Imdb';
import * as fs from 'fs';


let movies = [ new Movie ("Pelicula 1", 2020, "Española", "Terror"),
 new Movie ("Pelicula 2", 2021, "Española", "Comedia"),
 new Movie ("Pelicula 3", 2022, "Española", "Drama")
]
let collectionMovies = new Imdb(movies)

let myJson = JSON.stringify(collectionMovies)
fs.writeFileSync('imdbBBDD.json', myJson)

let copia = collectionMovies.obtenerInstanciaImdb('imdbBBDD.json')
console.log(copia);