import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { test, expect } from 'vitest';
import App from '../src/App';

const server = setupServer(
    rest.get('http://localhost:8080/api/misdemeanours/20', (req, res, ctx) => {        
        return res(ctx.json({
            "misdemeanours": [
                {
                    "citizenId": 1015,
                    "misdemeanour": "lift",
                    "date": "20/02/2023"
                },
                {
                    "citizenId": 2495,
                    "misdemeanour": "vegetables",
                    "date": "20/02/2023"
                },
                {
                    "citizenId": 8351,
                    "misdemeanour": "rudeness",
                    "date": "20/02/2023"
                }
            ]
        }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Renders app to avoid "useRoutes() may be used only in the context of a <Router> component" error
test('renders form element', async () => {	
    render(<App/>);
    await waitFor(() => screen.findByText(/Fakelandia Justice Department/i));
    const headerText = screen.getByText("Fakelandia Justice Department")
	expect(headerText).toBeInTheDocument();
});