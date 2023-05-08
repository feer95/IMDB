import { Professional } from './professional';
import { Movie } from './movie';

const movie = new Movie("La gran Película", 2023, "España", "Accion");

movie.director = new Professional("Yo", 27, 80, 180, false, "Española", 30, "Director");
movie.writer = new Professional("Yo", 27, 80, 180, false, "Española", 30, "Escritor");
movie.actors.push(new Professional("Tu", 48, 83, 183, false, "Española", 0, "Actor"));
movie.actors.push(new Professional("El", 58, 71, 165, true, "Española", 1, "Actor"));
movie.language = "Español";
movie.plataforma = "Netflix";
movie.isMCU = false;
movie.mainCharacterName = "Fer";
movie.producer = "Fer Productions";
movie.distributor = "Fer Distributions"

movie.showAll();
