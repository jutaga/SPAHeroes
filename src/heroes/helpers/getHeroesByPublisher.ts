import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {

    const validPubishers: string[] = ['DC Comics','Marvel Comics'];

    if(!validPubishers.includes(publisher)){
        throw new Error(`${publisher} Invalid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher)

}