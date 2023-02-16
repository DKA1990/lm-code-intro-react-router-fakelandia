export const validateSubject = (subject: string) : string | undefined => {
    if (subject.length < 2 || subject.length > 50) {
        return 'Subject name must be between 2 and 50 characters';
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(subject)) {
        return 'Subject field cannot contain any special characters';
    }
    return undefined;
}

export const validateDetails = (subject: string) : string | undefined => {
    if (subject.length < 20 || subject.length > 500) {
        return 'Details name must be between 20 and 500 characters';
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(subject)) {
        return 'Details field cannot contain any special characters';
    }
    return undefined;
}