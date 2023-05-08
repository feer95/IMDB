import { Professional } from './professional';

export class Movie {
    // Atributos
    title: string;
    releaseYear: number;
    actors: Professional[];
    nacionality: string;
    director: Professional;
    writer: Professional;
    language: string;
    plataforma: string;
    isMCU: boolean;
    mainCharacterName: string;
    producer: string;
    distributor: string;
    genre: string

    // Constructor
    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
    // Obligatorios
    this.title = title
    this.releaseYear = releaseYear
    this. nacionality = nacionality
    this.genre = genre
    // No obligatorios
    this.actors = []
    this.director = new Professional ("",0,0,0,false,"",0,"")
    this.writer = new Professional ("",0,0,0,false,"",0,"")
    this.language = ""
    this.plataforma = ""
    this.isMCU = false
    this.mainCharacterName = ""
    this.producer = ""
    this. distributor = ""
    }

    showAll(): void {
        let datos = {
    title: this.title,
    releaseYear: this.releaseYear,
    actors: this.actors,
    director: this.director,
    writer: this.writer,
    language: this.language,
    nacionality: this.nacionality,
    plataforma: this.plataforma,
    isMCU: this.isMCU,
    mainCharacterName: this.mainCharacterName,
    producer: this.producer,
    distributor: this.distributor,
    genre: this.genre
    }
    console.log(datos);   
    }
}