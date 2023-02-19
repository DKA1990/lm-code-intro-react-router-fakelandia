import { render } from '@testing-library/react';
import Header from '../src/components/header';

test('renders form element', () => {	
    const { container } = render(<Header/>);
	expect(container.firstChild).toHaveClass('header');
});