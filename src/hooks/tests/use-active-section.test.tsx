import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useActiveSection } from '../use-active-section.ts';
import { MockIntersectionObserver } from '../../test/setup.ts';

describe('useActiveSection', () => {
  it('observes sections and updates the active section when one intersects', () => {
    document.body.innerHTML = `
      <section id="projects"></section>
      <section id="about"></section>
      <footer id="contact"></footer>
    `;

    const { result, unmount } = renderHook(() => useActiveSection());
    const observer = MockIntersectionObserver.instances[0];

    expect(observer.observe).toHaveBeenCalledTimes(3);

    const about = document.getElementById('about')!;

    act(() => {
      observer.callback(
        [
          {
            isIntersecting: true,
            target: about,
          } as unknown as IntersectionObserverEntry,
        ],
        observer,
      );
    });

    expect(result.current).toBe('about');

    unmount();

    expect(observer.disconnect).toHaveBeenCalled();
  });
});
