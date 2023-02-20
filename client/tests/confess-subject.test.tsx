import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ConfessSubject, { ConfessSubjectProps } from '../src/components/confess-subject';

const requiredProps : ConfessSubjectProps = {
    subject: "Something",
    changeSubjectValue: vi.fn(),
    performValidation: (str: string) => { return str },
    setValid: vi.fn()
}

test('renders form element', () => {	
    const { container } = render(<ConfessSubject {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess__subject');
});

test('contains correct value when given input', () => {
    render(<ConfessSubject {...requiredProps}/>);
    const subjectText = screen.getByDisplayValue('Something');
    expect(subjectText).toBeInTheDocument();
});

test('renders label', () => {
    render(<ConfessSubject {...requiredProps}/>);
    const labelText = screen.getByText('Subject:');
    expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = vi.fn();

    const changeProps : ConfessSubjectProps = {
        subject: "Something",
        changeSubjectValue: mockChange,
        performValidation: (str: string) => { return str },
        setValid: vi.fn()
    }

    render(<ConfessSubject {...changeProps}/>);
    const subjectField = screen.getByRole('textbox', {name: 'subject'});
    expect(subjectField).toBeInTheDocument();

    if (subjectField) {
        await userEvent.type(subjectField, 'Hello');
    }

    expect(mockChange).toHaveBeenCalledTimes(5);
});