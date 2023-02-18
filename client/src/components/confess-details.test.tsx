import { render } from '@testing-library/react';
import { vi } from 'vitest';
import ConfessDetails, { ConfessDetailsProps } from './confess-details';

const requiredProps : ConfessDetailsProps = {
    details: "",
    changeDetailsValue: vi.fn(),
    performValidation: (str: string) => { return str },
    setValid: vi.fn()
}

test('renders form element', () => {	
    const { container } = render(<ConfessDetails {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess__details-text');
});