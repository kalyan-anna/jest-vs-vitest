import { render, screen } from '@testing-library/react';
import { Slide } from './Slide';

describe('Slide', () => {
  it('should show heading', () => {
    render(<Slide />);
    expect(screen.getByRole('heading')).toHaveTextContent('Slider');
  });

  it('should show slide', () => {
    render(<Slide />);
    expect(screen.getByText('Slide 1')).toBeVisible();
  });

  it('should show slide', () => {
    render(<Slide />);
    expect(screen.getByText('Slide 1')).toBeVisible();
  });
});
