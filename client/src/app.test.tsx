import App from "./App";
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, test, expect } from 'vitest'

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
    }),
    rest.post('http://localhost:8080/api/confess', (req, res, ctx) => {
        return res(ctx.json({
            success: true,
            justTalked: false,
            message: 'Confession received.',
        }))
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('app renders and navigation to misdemeanours successfully', async () => {
    render(<App />);
  
    await waitFor(() => screen.findByText(/Welcome/i));
    expect(screen.getByText(/Welcome to the home/i)).toBeInTheDocument();
  
    await userEvent.click(screen.getByText("Misdemeanours"));
    expect(screen.getByText(/Citizen ID/i)).toBeInTheDocument();
    // Dirty work around for previous render leaking into next test. URL being kept? cleanup issues?
    await userEvent.click(screen.getByText("Home")); 
});

test('app renders and navigation to confess successfully', async () => {
    render(<App />);

    await waitFor(() => screen.findByText(/Welcome/i));
    expect(screen.getByText(/Welcome to the home/i)).toBeInTheDocument();
  
    await userEvent.click(screen.getByText("Confess To Us"));
    expect(screen.getByText(/It's very difficult/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText("Home")); 
});

test('app renders misdemeanours successfully', async () => {
    render(<App />);

    await waitFor(() => screen.findByText(/Welcome/i));
    await userEvent.click(screen.getByText("Misdemeanours"));
    await waitFor(() => screen.findByText(/1015/i));
    expect(screen.getByText(/1015/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText("Home")); 
});

test('when clicked, submit button on confession form calls handle event', async () => {
    
    render(<App />);

    await waitFor(() => screen.findByText(/Welcome/i));
    await userEvent.click(screen.getByText("Confess To Us"));

    const inputField = screen.getByRole('textbox', {name: 'subject'});
        if (inputField) {
            await userEvent.type(inputField, 'Valid');
        }
    const inputField2 = screen.getByRole('textbox', {name: 'details'});
        if (inputField2) {
            await userEvent.type(inputField2, 'SomeValidInputTextOverTwentyChracters');
        }
    const submitButton = screen.getAllByRole('button').find(b => b.textContent === 'Confess');
    expect(submitButton).toBeInTheDocument();

    if (submitButton) {
        await userEvent.click(submitButton);
    }

    const errorText = screen.queryByText('Confession received.');
    expect(errorText).toBeInTheDocument();
});

