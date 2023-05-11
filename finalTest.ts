import * as fs from 'fs';
import { Imdb } from './Imdb';
import { Movie } from './movie';
import { Professional } from './professional';
import * as readlineSync from 'readline-sync';

// Recuperar el listado 
// let info = fs.readFileSync('imdbBBDD.json');
// let imdb: Imdb = new Imdb(JSON.parse(info.toString()))

// Añadir datos del professional
let name = readlineSync.question('Nombre: ');
let age = readlineSync.question('Edad: ');
let weight = readlineSync.question('Peso: ');
let height = readlineSync.question('Altura: ');
let isRetired = readlineSync.question('Retirado?: ');
let nationality = readlineSync.question('Nacionalidad: ');
let oscarsNumber = readlineSync.question('Nº de oscars: ');
let profession = readlineSync.question('Profesion: ');

// Crear un nuevo profesional 
let newPro = new Professional(name, age, weight,height,isRetired,nationality,oscarsNumber,profession)

// Integrarlo a la peli
let myjson = fs.readFileSync('./imdbBBDD.json') 
let imdb : Imdb = JSON.parse(myjson.toString()) 
let pelicula = imdb.peliculas[0]

if (profession == "actor") {
    pelicula.actors = [];
    pelicula.actors.push(newPro)
}

console.log(JSON.stringify(imdb));


