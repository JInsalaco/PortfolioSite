import { Link as RouterLink } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from 'components/ui/sheet';
import { useTheme } from 'components/theme-provider';

const menuButtons: { href: string; title: string }[] = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/resume',
    title: 'Resume',
  },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 mb-5 w-full border-b bg-primary text-primary-foreground shadow">
      <div className="container flex h-16 items-center justify-end gap-1">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle>Navigation</SheetTitle>
              <nav className="mt-6 flex flex-col gap-2">
                {menuButtons.map(({ title, href }) => (
                  <RouterLink
                    key={title}
                    to={href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {title}
                  </RouterLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <RouterLink to="/" className="mr-auto text-lg font-semibold text-primary-foreground no-underline">
          Joseph Insalaco
        </RouterLink>

        <nav className="hidden md:flex">
          {menuButtons.map(({ title, href }) => (
            <Button
              key={title}
              asChild
              variant="ghost"
              className="ml-1 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <RouterLink to={href}>{title}</RouterLink>
            </Button>
          ))}
        </nav>

        <Button
          size="icon"
          variant="ghost"
          className="ml-1 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          onClick={toggleTheme}
          aria-label="Dark mode toggle button"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}
