import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WillYou from './WillYou';

describe('WillYou', () => {
  it('asks the initial question with Yes and No buttons', () => {
    render(<WillYou />);

    expect(screen.getByText('Will you be my Valentine?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'No' })).toBeInTheDocument();
  });

  it('celebrates and hides the buttons once Yes is clicked', async () => {
    const user = userEvent.setup();
    render(<WillYou />);

    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(screen.getByText('WOOHOO')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Yes' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'No' })).not.toBeInTheDocument();
  });
});
