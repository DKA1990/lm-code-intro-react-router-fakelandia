import { render } from '@testing-library/react';
import MisdemeanoursContainer, { MisdemeanourContainerProps } from '../src/components/misdemeanour-container';

const requiredProps : MisdemeanourContainerProps = {
    misFilter: "undefined"
}

test('renders form element', () => {	
    const { container } = render(<MisdemeanoursContainer {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('misdemeanour-container');
});