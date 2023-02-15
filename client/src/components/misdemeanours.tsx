import { useState } from "react";
import { MisdemeanourKind } from "../../types/misdemeanours.type";
import MisdemeanoursContainer from "./misdemeanour-container";

const Misdemeanours: React.FC = () => {

    // Undefined is intentionally a string here. Returned value from <select> is always a string.
    const [misdemeanourFilter, setMisdemeanourFilter] = useState<MisdemeanourKind | "undefined">("undefined");

    function isMisdemeanourKind(mis: string) : mis is MisdemeanourKind | "undefined" {
        return (["rudeness", "vegetables", "lift", "united", "undefined"].includes(mis));
    }

    return (
        <section className="main misdemeanours">
            <select 
                className="misdemeanour-select"                                
                onChange={(e) => {
                    console.log(e.target.value);
                    if (isMisdemeanourKind(e.target.value)) {
                        setMisdemeanourFilter(e.target.value);
                    }
                }}>
                    <option value="undefined">No filter</option>
                    <option value="rudeness">Mild Public Rudeness</option>
                    <option value="vegetables">Not Eating Vegetables</option>
                    <option value="lift">Speaking in a Lift</option>
                    <option value="united">Supporting Manchester United</option>
            </select>
            <MisdemeanoursContainer misFilter={misdemeanourFilter}/>
        </section>
    );
};

export default Misdemeanours;