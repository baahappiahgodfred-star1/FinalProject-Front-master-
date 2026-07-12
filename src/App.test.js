import { render, screen } from '@testing-library/react';
import OrderConfirmation from './components/OrderConfirmation';

test('renders learn react link', () => {
  render(     <OrderConfirmation/>);
  const linkElement = screen.getByText(/order/i);
  expect(linkElement).toBeInTheDocument();
});
