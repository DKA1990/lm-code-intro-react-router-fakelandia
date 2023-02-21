import { validateDetails, validateSubject } from "../src/validation";

describe('when given a string, validateSubject returns correct error message', () => {
    test('when given string "Valid", returns no error', () => {
        const errorMessage : string | undefined = validateSubject('Valid');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "NotValid!", returns no special characters error', () => {
        const errorMessage : string | undefined = validateSubject('NotValid!');
        expect(errorMessage).toBe('Subject field cannot contain any special characters');
    });
    test('when given string "A", returns to few characters error', () => {
        const errorMessage : string | undefined = validateSubject('A');
        expect(errorMessage).toBe('Subject name must be between 2 and 50 characters');
    });
});

describe('when given a string, validateDetails returns correct error message', () => {
    test('when given string "SomeSortOfValidStringOver20Characters", returns no error', () => {
        const errorMessage : string | undefined = validateDetails('SomeSortOfValidStringOver20Characters');
        expect(errorMessage).toBe(undefined);
    });
    test('when given string "SomeSortOfInvalidStringOver20Characters!", returns no special characters error', () => {
        const errorMessage : string | undefined = validateDetails('SomeSortOfInvalidStringOver20Characters!');
        expect(errorMessage).toBe('Details field cannot contain any special characters');
    });
    test('when given string "A", returns to few characters error', () => {
        const errorMessage : string | undefined = validateDetails('A');
        expect(errorMessage).toBe('Details name must be between 20 and 500 characters');
    });
});