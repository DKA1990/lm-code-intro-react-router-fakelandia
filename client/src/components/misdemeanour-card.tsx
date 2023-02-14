import { Misdemeanour } from "../../types/misdemeanours.type";

const MisdemeanourCard : React.FC<{ misdemeanour: Misdemeanour }> = ({ misdemeanour }) => {
    
    return (
        <section className="misdemeanour-card">
            <div className="misdemeanour-card__citizen misdemeanour-card__text">{misdemeanour.citizenId}</div>
            <div className="misdemeanour-card__date misdemeanour-card__text">{misdemeanour.date}</div>
            <div className="misdemeanour-card__misdemeanour misdemeanour-card__text">{misdemeanour.misdemeanour}</div>
            <img src='https://picsum.photos/100/100' />;
        </section>
    )
}

export default MisdemeanourCard;