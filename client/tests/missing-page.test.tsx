import { render } from '@testing-library/react';
import Missing from '../src/components/missing-page';

test('renders form element', () => {	
    const { container } = render(<Missing/>);
	expect(container.firstChild).toHaveClass('missing');
});