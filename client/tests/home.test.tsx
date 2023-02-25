import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { test, expect } from 'vitest';

// Renders app to avoid "useRoutes() may be used only in the context of a <Router> component" error
test('renders form element', () => {	
    render(<App/>);
    const headerText = screen.getByText(/Welcome/g)
	expect(headerText).toBeInTheDocument();
});