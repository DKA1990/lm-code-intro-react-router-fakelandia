import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Confess, { ConfessProps } from '../src/components/confess';

const requiredProps : ConfessProps = {
    updateConfessions: vi.fn,
    updateMisdemeanours: vi.fn
}

test('renders form element', () => {	
    const { container } = render(<Confess {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess');
});

describe('confess subject name, when given string values, correct error messages are displayed', () => {

    test('when given valid input, render neither error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'subject'});
        if (inputField) {
            await userEvent.type(inputField, 'Valid');
        }
        const errorText = screen.queryByText('Subject name must be between 2 and 50 characters');
        expect(errorText).not.toBeInTheDocument();
        const errorText2 = screen.queryByText('Subject field cannot contain any special characters');
        expect(errorText2).not.toBeInTheDocument();
    });

    test('when given input containing less than 2 characters, render correct error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'subject'});
        if (inputField) {
            await userEvent.type(inputField, 'N');
        }
        const errorText = screen.getByText('Subject name must be between 2 and 50 characters');
        expect(errorText).toBeInTheDocument();
    });

    test('when given input containing more than 50 characters, render correct error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'subject'});
        if (inputField) {
            await userEvent.type(inputField, 'Sometextthatislongerthanfiftycharactersthatshouldhopefullydisplaythecorrecterrorasaresult');
        }
        const errorText = screen.getByText('Subject name must be between 2 and 50 characters');
        expect(errorText).toBeInTheDocument();
    });

    test('when given input containing special characters, render correct error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'subject'});
        if (inputField) {
            await userEvent.type(inputField, 'Invalid!?');
        }
        const errorText = screen.getByText('Subject field cannot contain any special characters');
        expect(errorText).toBeInTheDocument();
    });
});

describe('confess details name, when given string values, correct error messages are displayed', () => {

    test('when given valid input, render neither error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'details'});
        if (inputField) {
            await userEvent.type(inputField, 'SomeValidInputTextOverTwentyChracters');
        }
        const errorText = screen.queryByText('Details name must be between 20 and 500 characters');
        expect(errorText).not.toBeInTheDocument();
        const errorText2 = screen.queryByText('Details field cannot contain any special characters');
        expect(errorText2).not.toBeInTheDocument();
    });

    test('when given input containing less than 20 characters, render correct error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'details'});
        if (inputField) {
            await userEvent.type(inputField, 'Invalid');
        }
        const errorText = screen.getByText('Details name must be between 20 and 500 characters');
        expect(errorText).toBeInTheDocument();
    });    

    test('when given input containing special characters, render correct error message', async () => {
        render(<Confess {...requiredProps} />);

        const inputField = screen.getByRole('textbox', {name: 'details'});
        if (inputField) {
            await userEvent.type(inputField, 'InvalidTextThatContainsSomeSpecialCharacters!?');
        }
        const errorText = screen.getByText('Details field cannot contain any special characters');
        expect(errorText).toBeInTheDocument();
    });
});