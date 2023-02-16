import { useState, useContext, createContext, useEffect } from "react";
import { ConfessionContext } from "../App";
import ConfessSubject from "./confess-subject";
import { validateSubject, validateDetails } from "../validation";
import ConfessDetails from "./confess-details";
import ConfessReason from "./confess-reason";

export const ValidSubject = createContext(false);
export const ValidDetails = createContext(false);

const Confess: React.FC = () => {

    const confessions = useContext(ConfessionContext);

    const [buttonDisabled, disableButton] = useState(true);
    
    const [subject, setSubject] = useState('');
    const [subjectValid, setSubjectValid] = useState(false);

    const [details, setDetails] = useState('');
    const [detailsValid, setDetailsValid] = useState(false);

    const [reason, setReason] = useState('rudeness');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
            </form>
        </section>
    )
};

export default Confess;