import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RunawayNo from './RunawayNo';

describe('RunawayNo', () => {
  it('starts in place', () => {
    render(<RunawayNo />);

    const button = screen.getByRole('button', { name: 'No' });
    expect(button).toHaveStyle({ top: '0px', left: '0px' });
  });

  it('runs away when the pointer hovers over it', async () => {
    const user = userEvent.setup();
    // Make the random offset deterministic and non-zero.
    vi.spyOn(Math, 'random').mockReturnValue(1);

    render(<RunawayNo />);
    const button = screen.getByRole('button', { name: 'No' });

    await user.hover(button);

    expect(button).not.toHaveStyle({ top: '0px', left: '0px' });
  });
});
