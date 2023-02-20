import { useState, ChangeEvent } from "react";
import ErrorMessage from "./error-message";

export interface ConfessSubjectProps {
    subject: string;
    changeSubjectValue: (e: ChangeEvent<HTMLInputElement>) => void;
    performValidation: (input: string) => string | undefined;
    setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfessSubject : React.FC<ConfessSubjectProps> = ({ subject, changeSubjectValue, performValidation, setValid }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="confess__subject">
            <label className="confess__subject-label" htmlFor="subject">Subject: </label> 
            <input 
                className="confess__subject-text"
                type="text"
                id="subject"
                value={subject}
                onChange={async (e) => {
                    const errorMessage = performValidation(e.target.value);
                    setErrorMessage(errorMessage);                    
                    setValid(!errorMessage);
                    changeSubjectValue(e);
                }}
                >
            </input>
            <ErrorMessage errorText={errorMessage} />
        </div>
    )
}

export default ConfessSubject;