import { render } from '@testing-library/react';
import { vi } from 'vitest';
import ConfessReason, { ConfessReasonProps } from './confess-reason';

const requiredProps : ConfessReasonProps = {
    reason: '',
    changeReason: vi.fn
}

test('renders form element', () => {	
    const { container } = render(<ConfessReason {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess__reason-label');
});