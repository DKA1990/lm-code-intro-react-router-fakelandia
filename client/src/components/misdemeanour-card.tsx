import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.type";

export interface MisdemeanourCardProps {
    misdemeanour: Misdemeanour
}

const MisdemeanourCard : React.FC<MisdemeanourCardProps> = ({ misdemeanour }) => {    
    const showMisdemeanourText = (misdemeanour: MisdemeanourKind) => {
        switch(misdemeanour) {
            case "rudeness":
                return "Mild public rudeness";
            case "lift":
                return "Speaking in a lift";
            case "united":
                return "Supporting Manchester United";
            case "vegetables":
                return "Not eating their vegetables"
        }
    }

    return (
        <section className="misdemeanour-card">
            <div className="misdemeanour-card__citizen misdemeanour-card__text">{misdemeanour.citizenId}</div>
            <div className="misdemeanour-card__date misdemeanour-card__text">{misdemeanour.date}</div>
            <div className="misdemeanour-card__misdemeanour misdemeanour-card__text">{showMisdemeanourText(misdemeanour.misdemeanour)}</div>
            <img className="misdemeanour-card__image misdemeanour-card__text" src={misdemeanour.punishment} />
        </section>
    )
}

export default MisdemeanourCard;