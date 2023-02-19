import { render } from '@testing-library/react';
import MainLayout from '../src/components/layout';

test('renders form element', () => {	
    const { container } = render(<MainLayout/>);
	expect(container.children[1]).toHaveClass('main-container');
});