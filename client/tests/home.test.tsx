import { render } from '@testing-library/react';
import Home from '../src/components/home';

test('renders form element', () => {	
    const { container } = render(<Home/>);
	expect(container.firstChild).toHaveClass('home');
});