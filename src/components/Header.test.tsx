import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider } from './theme-provider';

function renderHeader() {
  return render(
    <ThemeProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('Header', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the brand link pointing home', () => {
    renderHeader();
    const brand = screen.getByRole('link', { name: 'Joseph Insalaco' });
    expect(brand).toHaveAttribute('href', '/');
  });

  it('renders Home and Resume navigation links', () => {
    renderHeader();
    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    const resumeLinks = screen.getAllByRole('link', { name: 'Resume' });

    expect(homeLinks.some((link) => link.getAttribute('href') === '/')).toBe(true);
    expect(resumeLinks.some((link) => link.getAttribute('href') === '/resume')).toBe(true);
  });

  it('toggles the theme icon when the dark mode button is clicked', async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggleButton = screen.getByRole('button', { name: /dark mode toggle button/i });
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    await user.click(toggleButton);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('opens the mobile navigation menu from the hamburger button', async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole('button', { name: /open navigation menu/i }));

    const dialog = await screen.findByRole('dialog');
    expect(within(dialog).getByText('Navigation')).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(within(dialog).getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume');
  });
});
