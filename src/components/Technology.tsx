import { use } from "react";
import TechnolgyCard from "./TechnologyCard";
import type { CardType } from "../CardType";

interface TechnologyProps {
    technologisePromise : Promise<CardType[]>
    handleAddToStack : (technology: CardType)=> void
    selectedTechnology : CardType[]
}

const Technology = ({technologisePromise , handleAddToStack , selectedTechnology}:TechnologyProps) => {
    const technologys = use(technologisePromise)
    console.log(technologys)
    return (
        
        <div>
          
            <TechnolgyCard
             technologys={technologys}
             handleAddToStack ={handleAddToStack}
              selectedTechnology={selectedTechnology}/>
        </div>
    );
};

export default Technology;