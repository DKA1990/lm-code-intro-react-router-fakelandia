import { render } from '@testing-library/react';
import { vi } from 'vitest';
import ConfessSubject, { ConfessSubjectProps } from './confess-subject';

const requiredProps : ConfessSubjectProps = {
    subject: "",
    changeSubjectValue: vi.fn(),
    performValidation: (str: string) => { return str },
    setValid: vi.fn()
}

test('renders form element', () => {	
    const { container } = render(<ConfessSubject {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess__subject-label');
});