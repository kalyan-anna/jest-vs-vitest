import { render, screen } from '@testing-library/react';
import { StringKebabCase } from './StringKebabCase';

describe('StringKebabCase', () => {
  it('should convert to kebabCase', () => {
    render(<StringKebabCase />);
    expect(screen.getByText('foo-bar')).toBeVisible();
  });
});
