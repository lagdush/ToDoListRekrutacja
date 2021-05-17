import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from '../components/LoginPage/HomePage';

describe('LoginPage tests', () => {
  it('test LoginPage render', () => {
    render(<LoginPage />, { wrapper: RecoilRoot });
    const header = screen.getByText('Check It');
    const buttonText = screen.getByText('Zaloguj się');
    expect(header).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
  it('test input handles value change', () => {
    render(<LoginPage />, { wrapper: RecoilRoot });
    const input = screen.getByLabelText('Podaj swoje ID');
    fireEvent.change(input, { target: { value: '678' } });
    expect(input).toHaveValue('678');
    expect(input).not.toHaveValue('test iod');
  });
});
