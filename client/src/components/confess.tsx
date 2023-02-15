import { useContext } from "react";
import { ConfessionContext } from "../App";

const Confess: React.FC = () => {

    const confessions = useContext(ConfessionContext);

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <section className="main confess">
            <p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens
                confess to u se directly.</p>
            <p>However, if you're just having a hard day and you need to vent then you're welcome to contact
                us here too. Up to you!</p>
            <form onSubmit={submitForm}>
                <label className="confess__subject-label">Subject: 
                    <input 
                        className="confess__subject-text"
                        type="text"
                        onChange={(e) => {
                            //Validation??

                        }}
                        >
                    </input>
                </label>
                <label className="confess__reason-label">Reason for contact: 
                    <select className="confess__reason-select">
                        <option value="rudeness">Mild Public Rudeness</option>
                        <option value="vegetables">Not Eating Vegetables</option>
                        <option value="lift">Speaking in a Lift</option>
                        <option value="united">Supporting Manchester United</option>
                        <option value="talk">Just want to Talk</option>
                    </select>    
                </label>
                <textarea className="confess__details">
                </textarea>
                <button className="confess__submit-button" type="submit" id="submit">Submit</button>
            </form>
        </section>
    )
};

export default Confess;