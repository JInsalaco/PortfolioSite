import { render, screen } from '@testing-library/react';
import { ContactInfo } from './ContactInfo';

describe('ContactInfo', () => {
  it('links each contact method to the correct destination', () => {
    render(<ContactInfo />);

    expect(screen.getByRole('link', { name: 'joseph.insalaco1@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:joseph.insalaco1@gmail.com'
    );
    expect(screen.getByRole('link', { name: '(718) 689-0507' })).toHaveAttribute(
      'href',
      'tel:+17186890507'
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/JInsalaco'
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/joseph-insalaco-ab7679194/'
    );
  });

  it('opens external profile links in a new tab safely', () => {
    render(<ContactInfo />);

    [
      screen.getByRole('link', { name: 'GitHub' }),
      screen.getByRole('link', { name: 'LinkedIn' }),
    ].forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
