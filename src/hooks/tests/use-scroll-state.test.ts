import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useScrollState } from '../use-scroll-state.ts';

describe('useScrollState', () => {
  it('tracks header and scroll-to-top visibility from scroll position', () => {
    const { result } = renderHook(() => useScrollState());

    expect(result.current).toEqual({
      scrolled: false,
      showScrollTop: false,
    });

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toEqual({
      scrolled: true,
      showScrollTop: false,
    });

    Object.defineProperty(window, 'scrollY', { value: 720, configurable: true });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toEqual({
      scrolled: true,
      showScrollTop: true,
    });
  });
});
