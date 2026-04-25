import { render, screen, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useScrollAnimation } from '../use-scroll-animation.ts';
import { MockIntersectionObserver } from '../../test/setup.ts';

function TestComponent() {
  useScrollAnimation();

  return (
    <div>
      <div data-testid="animated" className="animate-on-scroll">
        Animated
      </div>
      <div className="animate-on-scroll">Other</div>
    </div>
  );
}

describe('useScrollAnimation', () => {
  it('observes animated elements and adds the animate-in class on intersection', () => {
    const { unmount } = render(<TestComponent />);
    const observer = MockIntersectionObserver.instances[0];
    const animated = screen.getByTestId('animated');

    expect(observer.observe).toHaveBeenCalledTimes(2);

    act(() => {
      observer.callback(
        [
          {
            isIntersecting: true,
            target: animated,
          } as IntersectionObserverEntry,
        ],
        observer,
      );
    });

    expect(animated).toHaveClass('animate-in');

    unmount();

    expect(observer.disconnect).toHaveBeenCalled();
  });
});
