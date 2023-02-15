import { Misdemeanour } from "../../types/misdemeanours.type";

interface MisdemeanourCardProps {
    misdemeanour: Misdemeanour
}

const MisdemeanourCard : React.FC<MisdemeanourCardProps> = ({ misdemeanour }) => {    
    return (
        <section className="misdemeanour-card">
            <div className="misdemeanour-card__citizen misdemeanour-card__text">{misdemeanour.citizenId}</div>
            <div className="misdemeanour-card__date misdemeanour-card__text">{misdemeanour.date}</div>
            <div className="misdemeanour-card__misdemeanour misdemeanour-card__text">{misdemeanour.misdemeanour}</div>
            <img className="misdemeanour-card__image" src={misdemeanour.punishment} />
        </section>
    )
}

export default MisdemeanourCard;