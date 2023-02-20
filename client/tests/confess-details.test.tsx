import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
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

