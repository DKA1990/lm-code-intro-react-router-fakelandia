import { render, screen } from '@testing-library/react';
import App from '../src/App';

// Renders app to avoid "useRoutes() may be used only in the context of a <Router> component" error
test('renders form element', () => {	
    render(<App/>);
    const headerText = screen.getByText("Fakelandia Justice Department")
	expect(headerText).toBeInTheDocument();
});