import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, test, expect } from 'vitest';
import ConfessDetails, { ConfessDetailsProps } from '../src/components/confess-details';

const requiredProps : ConfessDetailsProps = {
    details: "Something",
    changeDetailsValue: vi.fn(),
    performValidation: (str: string) => { return str },
    setValid: vi.fn()
}

test('renders form element', () => {	
    const { container } = render(<ConfessDetails {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess__details');
});

test('contains correct value when given input', () => {
    render(<ConfessDetails {...requiredProps}/>);
    const detailsText = screen.getByDisplayValue('Something');
    expect(detailsText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = vi.fn();

    const changeProps : ConfessDetailsProps = {
        details: "Something",
        changeDetailsValue: mockChange,
        performValidation: (str: string) => { return str },
        setValid: vi.fn()
    }

    render(<ConfessDetails {...changeProps}/>);
    const subjectField = screen.getByRole('textbox', {name: 'details'});
    expect(subjectField).toBeInTheDocument();

    if (subjectField) {
        await userEvent.type(subjectField, 'Hello');
    }

    expect(mockChange).toHaveBeenCalledTimes(5);
});

