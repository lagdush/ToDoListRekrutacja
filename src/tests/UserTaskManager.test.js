import { render, screen, fireEvent } from '@testing-library/react';
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
    fireEvent.change(input, { target: { value: 'Lorem' } });
    expect(input).toHaveValue('Lorem');
    expect(input).not.toHaveValue('test iod');
  });
});
