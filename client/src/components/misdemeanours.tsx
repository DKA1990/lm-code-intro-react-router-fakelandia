import { useContext } from "react";
import { MisdemeanourKind } from "../../types/misdemeanours.type";
import { MisdemeanourContext } from "../App";
import MisdemeanourCard from "./misdemeanour-card";

const Misdemeanours: React.FC = () => {

    const misdemeanours = useContext(MisdemeanourContext)

    // Optional type. If found filter, if not display all
    const createMisdemeanours = ( type? : MisdemeanourKind) => {
        let misdemeanourCardArr : Array<JSX.Element> = [];

        misdemeanours.forEach(misdemeanour => {
            misdemeanourCardArr.push(<MisdemeanourCard misdemeanour={misdemeanour}/>);
        })
        
        return misdemeanourCardArr;
    }

    console.log(misdemeanours);

    return (
        <div>
            {createMisdemeanours()}
        </div>
    );
};

export default Misdemeanours;