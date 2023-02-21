import { ChangeEvent } from "react";

export interface ConfessReasonProps {
    reason: string;
    changeReason: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ConfessReason : React.FC<ConfessReasonProps> = ({ reason, changeReason }) => {

    return (
        <div className="confess__element confess__reason">
            <label className="confess__reason-label" htmlFor="reason">Reason for contact: </label>
                <select 
                    className="confess__reason-select" 
                    id="reason"
                    aria-label="reason"
                    value={reason}
                    onChange={(e) =>  changeReason(e)}
                >
                        <option value="rudeness">Mild Public Rudeness</option>
                        <option value="vegetables">Not Eating Vegetables</option>
                        <option value="lift">Speaking in a Lift</option>
                        <option value="united">Supporting Manchester United</option>
                        <option value="just-talk">Just want to Talk</option>
                </select> 
        </div>
    )
}

export default ConfessReason;