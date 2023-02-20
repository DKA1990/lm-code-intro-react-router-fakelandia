import React, { useState, useContext, useEffect, useRef } from "react";
import { ConfessionContext, MisdemeanourContext } from "../App";
import ConfessSubject from "./confess-subject";
import { validateSubject, validateDetails } from "../validation";
import ConfessDetails from "./confess-details";
import ConfessReason from "./confess-reason";
import post from "../post-server";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.type";
import ErrorMessage from "./error-message";
import { Confession } from "../../types/confess.type";

export interface ConfessProps {
    updateConfessions: (confessions: Array<Confession>) => void;
    updateMisdemeanours: (misdemeanours: Array<Misdemeanour>) => void;
}

const Confess: React.FC<ConfessProps> = ({ updateConfessions, updateMisdemeanours }) => {

    const confessions = useContext(ConfessionContext);
    const misdemeanours = useContext(MisdemeanourContext);

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
        const serverResponse: {success: boolean, message: string} = (await post(newConfession));
        setErrorMessage(serverResponse.message);
        if (serverResponse.success === true) {
            updateConfessions([...confessions, newConfession]);
            if (newConfession.reason !== "just-talk") { 
                const today = new Date().toLocaleDateString();
                updateMisdemeanours([...misdemeanours, {citizenId: 1, misdemeanour: newConfession.reason, date: `${today}`, punishment: `https://picsum.photos/100/100?${misdemeanours.length}`}]);
            }
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
            <form className="confess__form" onSubmit={submitForm}>
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
                    className="confess__element confess__submit-button" 
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