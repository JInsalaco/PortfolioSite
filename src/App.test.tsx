import { render, screen } from '@testing-library/react';
import App from './App';

function renderAtRoute(route: string) {
  window.history.pushState({}, 'Test page', route);
  return render(<App />);
}

describe('App routing', () => {
  it('renders the home page at "/"', () => {
    renderAtRoute('/');

    expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact info/i })).toBeInTheDocument();
  });

  it('renders the resume page at "/resume"', () => {
    renderAtRoute('/resume');

    expect(screen.getByTitle('Joseph Insalaco Resume')).toBeInTheDocument();
  });

  it('redirects unknown routes back to the home page', () => {
    renderAtRoute('/this-page-does-not-exist');

    expect(window.location.pathname).toBe('/');
    expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument();
  });
});
