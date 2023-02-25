import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Home from '../src/components/home';

test('renders form element', () => {	
    render(<Home/>);
    const headerText = screen.getByText(/Welcome/g)
	expect(headerText).toBeInTheDocument();
});