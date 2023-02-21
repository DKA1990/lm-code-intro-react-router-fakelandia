import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ConfessReason, { ConfessReasonProps } from '../src/components/confess-reason';

const requiredProps : ConfessReasonProps = {
    reason: 'rudeness',
    changeReason: vi.fn
}

test('renders form element', () => {	
    const { container } = render(<ConfessReason {...requiredProps}/>);
	expect(container.firstChild).toHaveClass('confess__reason');
});

test('contains correct value when given input', () => {
    render(<ConfessReason {...requiredProps}/>);
    const subjectText = screen.getByDisplayValue('Mild Public Rudeness');
    expect(subjectText).toBeInTheDocument();
});

test('renders label', () => {
    render(<ConfessReason {...requiredProps}/>);
    const labelText = screen.getByText('Reason for contact:');
    expect(labelText).toBeInTheDocument();
});

test('onChange called when given correct prop input', async () => {

    const mockChange = vi.fn();

    const changeTestProps : ConfessReasonProps = {
        reason: 'rudeness',
        changeReason: mockChange
    }

	render(<ConfessReason {...changeTestProps}/>);
	const inputField = screen.getByRole('combobox', {name: 'reason'});
    expect(inputField).toBeInTheDocument();

    if (inputField) {
        await userEvent.selectOptions(inputField, ('vegetables'));
    }
    expect(mockChange).toHaveBeenCalledTimes(1);
});