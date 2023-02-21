import { render, screen } from '@testing-library/react';
import MisdemeanourCard, { MisdemeanourCardProps } from '../src/components/misdemeanour-card';

const requiredProps : MisdemeanourCardProps = {
    misdemeanour: {
        citizenId: 1,
        misdemeanour: "rudeness",
        date: "01/01/2010",
        punishment: ""
    }
}

test('renders form element', () => {	
    const { container } = render(<MisdemeanourCard {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('misdemeanour-card');
});

test('renders card showing correct information given misdemeanour as props', () => {
    render(<MisdemeanourCard {...requiredProps}/>);
    const misdemeanourText = screen.getByText('Mild public rudeness');
    expect(misdemeanourText).toBeInTheDocument();
});