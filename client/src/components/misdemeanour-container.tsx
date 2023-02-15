import { useState, useContext } from "react";
import { MisdemeanourKind } from "../../types/misdemeanours.type";
import { MisdemeanourContext } from "../App";
import MisdemeanourCard from "./misdemeanour-card";

interface MisdemeanourContainerProps {
    misFilter: MisdemeanourKind | "undefined"
}

const MisdemeanoursContainer: React.FC<MisdemeanourContainerProps> = ({ misFilter }) => {

    const misdemeanours = useContext(MisdemeanourContext);

    // Optional type. If found filter, if not display all
    const createMisdemeanours = ( misFilter : MisdemeanourKind | "undefined") => {
        console.log('bleh');
        let misdemeanourCardArr : Array<JSX.Element> = [];

        if (misFilter === "undefined") {
            misdemeanours.forEach((misdemeanour, index) => {
                misdemeanourCardArr.push(<MisdemeanourCard misdemeanour={misdemeanour} randomSrc={index}/>);
            })
        } else {
            misdemeanours.filter(misdemeanour => misdemeanour.misdemeanour === misFilter).forEach((misdemeanour, index) => {
                misdemeanourCardArr.push(<MisdemeanourCard misdemeanour={misdemeanour} randomSrc={index}/>);
            })
        }
        
        return misdemeanourCardArr;
    }

    console.log(misdemeanours);

    return (
        <div className="misdemeanout-container">
            {createMisdemeanours(misFilter)}
        </div>
    );
};

export default MisdemeanoursContainer;