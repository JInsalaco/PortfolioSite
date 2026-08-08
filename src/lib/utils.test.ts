import { cn } from './utils';

describe('cn', () => {
  it('joins multiple class name strings', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('drops falsy values', () => {
    const isActive = false;
    expect(cn('a', isActive && 'b', undefined, null, '', 'c')).toBe('a c');
  });

  it('merges conflicting tailwind classes, keeping the last one', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('supports conditional object syntax', () => {
    expect(cn('base', { active: true, hidden: false })).toBe('base active');
  });
});
