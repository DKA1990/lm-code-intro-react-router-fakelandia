import { useContext } from "react";
import { MisdemeanourKind } from "../../types/misdemeanours.type";
import { MisdemeanourContext } from "../App";
import MisdemeanourCard from "./misdemeanour-card";

export interface MisdemeanourContainerProps {
    misFilter: MisdemeanourKind | "undefined"
}

const MisdemeanoursContainer: React.FC<MisdemeanourContainerProps> = ({ misFilter }) => {

    const misdemeanours = useContext(MisdemeanourContext);

    // Optional type. If found filter, if not display all
    const createMisdemeanours = ( misFilter : MisdemeanourKind | "undefined") => {
        let misdemeanourCardArr : Array<JSX.Element> = [];

        if (misFilter === "undefined") {
            misdemeanours.forEach((misdemeanour, index) => {
                misdemeanourCardArr.push(<MisdemeanourCard key={index} misdemeanour={misdemeanour}/>);
            })
        } else {
            misdemeanours.filter(misdemeanour => misdemeanour.misdemeanour === misFilter).forEach((misdemeanour, index) => {
                misdemeanourCardArr.push(<MisdemeanourCard misdemeanour={misdemeanour}/>);
            })
        }
        
        return misdemeanourCardArr;
    }

    return (
        <div className="misdemeanour-container">
            <div className="misdemeanour-container__headings">
                <h3 className="misdemeanour-container__headings__heading">Citizen ID</h3>
                <h3 className="misdemeanour-container__headings__heading">Date</h3>
                <h3 className="misdemeanour-container__headings__heading">Misdemeanour</h3>
                <h3 className="misdemeanour-container__headings__heading">Recommended Punishment</h3>
            </div>
            {createMisdemeanours(misFilter)}
        </div>
    );
};

export default MisdemeanoursContainer;