import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';

function renderHomeContainer() {
  return render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>
  );
}

describe('HomeContainer', () => {
  it('renders every home page section', () => {
    renderHomeContainer();

    expect(screen.getByRole('heading', { name: 'Joseph' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Insalaco' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument();
  });

  it('links to the resume page from the About section', () => {
    renderHomeContainer();

    expect(screen.getByRole('link', { name: 'my resume' })).toHaveAttribute('href', '/resume');
  });

  it('lists each skill from the Skills section', () => {
    renderHomeContainer();

    [
      'Roadmapping',
      'Stakeholder Management',
      'Generative AI',
      'AI Agents',
      'AI Workflow Automation',
      'SQL',
      'AWS',
      'Java',
      'TypeScript',
      'React',
    ].forEach((skill) => {
      expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
    });
  });

  it('highlights the current role', () => {
    renderHomeContainer();

    expect(screen.getAllByText('Senior Product Manager').length).toBeGreaterThan(0);
  });
});
