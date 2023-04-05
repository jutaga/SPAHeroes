import { HeroCard } from "./HeroCard";
import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"

interface PropsList {
    publisher: string;
}

export const HeroeList = ({ publisher }: PropsList) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher) , [publisher]) ;

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
         {
            heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))
         }
        </div>
    )
}
