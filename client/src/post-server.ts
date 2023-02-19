import { Confession } from '../types/confess.type'

async function post(confession : Confession) {       
    const apiResponse = await fetch(`http://localhost:8080/api/confess`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },       
        body: JSON.stringify({
            "subject": confession.subject,
            "reason": confession.reason,
            "details": confession.details
        })
    });

    const json = await apiResponse.json();
    
    return json;
}

export default post;