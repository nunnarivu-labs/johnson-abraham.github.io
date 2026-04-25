import { afterEach, describe, expect, it, vi } from 'vitest';

import { getExperience, navLinks, PROJECTS_HREF } from '../utils.ts';

describe('utils', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates experience from June 2017 to the current date', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-25T00:00:00Z'));

    expect(getExperience()).toBe(8.10);
  });

  it('exposes the projects link as the first navigation item', () => {
    expect(PROJECTS_HREF).toBe('#projects');
    expect(navLinks[0]).toEqual({ href: '#projects', label: 'Projects' });
    expect(navLinks).toHaveLength(5);
  });
});
