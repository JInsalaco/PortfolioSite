import { render, screen } from '@testing-library/react';
import { Portfolio } from './Portfolio';

describe('Portfolio', () => {
  it('renders a card for every project with a link to its repository', () => {
    render(<Portfolio />);

    const projects = [
      { title: 'Wedd.io', url: 'https://github.com/JInsalaco/CS554_Good_Nodels' },
      { title: 'The Duck Pond', url: 'https://github.com/JInsalaco/CS546_Group5' },
      { title: 'Python Blackjack', url: 'https://github.com/JInsalaco/Blackjack' },
    ];

    projects.forEach(({ title, url }) => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
      const link = screen.getByRole('link', { name: `Link to ${title} GitHub repository` });
      expect(link).toHaveAttribute('href', url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('lists the technologies used for each project', () => {
    render(<Portfolio />);

    expect(screen.getByText('Redis')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });
});
