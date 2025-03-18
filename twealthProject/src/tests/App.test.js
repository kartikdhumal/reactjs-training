import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest'; // Import vi from Vitest
import '@testing-library/jest-dom';
import App from '../App';

describe('To Do List Tests', () => {
  it('should add a task', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);

    const input = screen.getByPlaceholderText('Add a new goal...');
    const addButton = screen.getByText('Add Goal');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(alertMock).toHaveBeenCalledWith('Task Added');

    alertMock.mockRestore();
  });
});
