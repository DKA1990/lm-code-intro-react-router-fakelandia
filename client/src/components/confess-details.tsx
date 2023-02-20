import { useState, ChangeEvent } from "react";
import ErrorMessage from "./error-message";

export interface ConfessDetailsProps {
    details: string;
    changeDetailsValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    performValidation: (input: string) => string | undefined;
    setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfessDetails : React.FC<ConfessDetailsProps> = ({ details, changeDetailsValue, performValidation, setValid }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    return (
        <div className="confess__details">
            <textarea 
                className="confess__details-text"
                id="details"
                value={details}
                onChange={(e) => {
                    const errorMessage = performValidation(e.target.value);
                    setErrorMessage(errorMessage);
                    setValid(!errorMessage);
                    changeDetailsValue(e);
                }}
                >
            </textarea>
            <ErrorMessage errorText={errorMessage} />
        </div>
    )
}

export default ConfessDetails;