import { useState, useContext, useEffect } from "react";
import { ConfessionContext } from "../App";
import ConfessSubject from "./confess-subject";
import { validateSubject, validateDetails } from "../validation";
import ConfessDetails from "./confess-details";
import ConfessReason from "./confess-reason";
import post from "../post-server";
import { MisdemeanourKind } from "../../types/misdemeanours.type";
import ErrorMessage from "./error-message";
import { Confession } from "../../types/confess.type";

export interface ConfessProps {
    updateConfessions: (confessions: Array<Confession>) => void;
}

const Confess: React.FC<ConfessProps> = ({ updateConfessions }) => {

    const confessions = useContext(ConfessionContext);

    const [buttonDisabled, disableButton] = useState(true);
    
    const [subject, setSubject] = useState('');
    const [subjectValid, setSubjectValid] = useState(false);

    const [details, setDetails] = useState('');
    const [detailsValid, setDetailsValid] = useState(false);

    const [reason, setReason] = useState<MisdemeanourKind | "just-talk">('rudeness');

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newConfession: Confession = { subject: subject, reason: reason, details: details };
        setErrorMessage(await post(newConfession));
        if (errorMessage === "Confession received." && newConfession.reason !== "just-talk") {
            updateConfessions([...confessions, newConfession]);
        }
    }

    // useEffect needed here because validity states not updated instantly
    useEffect(() => 
        disableButton(!subjectValid || !detailsValid)
    ), [subjectValid, detailsValid];

    return (
        <section className="main confess">
            <p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens
                confess to us directly.</p>
            <p>However, if you're just having a hard day and you need to vent then you're welcome to contact
                us here too. Up to you!</p>
            <form onSubmit={submitForm}>
                <ConfessSubject 
                    subject={subject} 
                    changeSubjectValue={(event: any) => {
                        setSubject(event.target.value);                                              
                    }}
                    performValidation={validateSubject}
                    setValid={setSubjectValid}
                />
                <ConfessReason 
                    reason={reason}
                    changeReason={(event: any) => {
                        setReason(event?.target.value)
                    }}
                />   
                <ConfessDetails 
                    details={details}
                    changeDetailsValue={(event: any) => {
                        setDetails(event.target.value);
                    }}
                    performValidation={validateDetails}
                    setValid={setDetailsValid}
                />
                <button 
                    className="confess__submit-button" 
                    type="submit" 
                    id="submit"
                    disabled={buttonDisabled}>Confess                    
                </button>
                <ErrorMessage errorText={errorMessage}/>
            </form>
        </section>
    )
};

export default Confess;