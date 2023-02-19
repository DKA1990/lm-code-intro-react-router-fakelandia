import { render } from '@testing-library/react';
import Misdemeanours from '../src/components/misdemeanours';

test('renders form element', () => {	
    const { container } = render(<Misdemeanours/>);
	expect(container.firstChild).toHaveClass('misdemeanours');
});