import { useContext } from "react";
import { ConfessionContext, MisdemeanourContext } from "../App";

const Home: React.FC = () => {
    const misdemeanours = useContext(MisdemeanourContext);
    const confessions = useContext(ConfessionContext);

    return (
        <section className="main home">
            <p>Welcome to the home of the Justice Department of Fakelandia.</p>
            <p>Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour.</p>
            <p>Currently reported misdemeanours: <strong>{misdemeanours.length}</strong></p>
            <p>Total confessions today: <strong>{confessions.length}</strong></p>
        </section>
    )
};

export default Home;