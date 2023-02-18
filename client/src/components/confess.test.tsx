import { render } from '@testing-library/react';
import { vi } from 'vitest';
import Confess, { ConfessProps } from './confess';

const requiredProps : ConfessProps = {
    updateConfessions: vi.fn
}

test('renders form element', () => {	
    const { container } = render(<Confess {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess');
});