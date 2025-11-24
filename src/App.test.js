import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app with user list', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const usersHeading = screen.getByText(/users/i);
  expect(usersHeading).toBeInTheDocument();
});

