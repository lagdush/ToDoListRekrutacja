import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import UserTaskManager from '../view/UserTaskManager/UserTaskManager';

describe('UserTaskManagertests', () => {
  it('test UserTaskManager render', () => {
    render(<UserTaskManager />, { wrapper: RecoilRoot });
    const inactiveTasks = screen.getByText('Zakończone zadania:');
    const activeTasks = screen.getByText('Aktywne zadania:');
    const buttonText = screen.getByText('Dodaj zadanie');
    const labelText = screen.getByLabelText('Tytuł Zadania');
    expect(inactiveTasks).toBeInTheDocument();
    expect(activeTasks).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
  });
  it('test input handles value change', () => {
    render(<UserTaskManager />, { wrapper: RecoilRoot });
    const input = screen.getByLabelText('Tytuł Zadania');
    fireEvent.change(input, { target: { value: 'Lorem ipsum dolor' } });
    expect(input).toHaveValue('Lorem ipsum dolor');
    expect(input).not.toHaveValue('test iod');
  });
  it('test input handles value change after button click', () => {
    render(<UserTaskManager />, { wrapper: RecoilRoot });
    const input = screen.getByLabelText('Tytuł Zadania');
    const leftClick = { button: 0 };
    fireEvent.change(input, { target: { value: 'Lorem ipsum dolor' } });
    expect(input).toHaveValue('Lorem ipsum dolor');
    userEvent.click(screen.getByText('Dodaj zadanie'), leftClick);
    expect(input).not.toHaveValue('Lorem ipsum dolor');
  });
});
