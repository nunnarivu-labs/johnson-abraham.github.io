import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Intro } from '../intro.tsx';
import { About } from '../about.tsx';
import { Projects } from '../projects.tsx';
import { Skills } from '../skills.tsx';
import { Experience } from '../experience.tsx';
import * as utils from '../../../utils.ts';

describe('Intro', () => {
  it('renders the experience summary and projects CTA', () => {
    vi.spyOn(utils, 'getExperience').mockReturnValue(8.1);

    render(<Intro />);

    expect(
      screen.getByText(/with 8\.1 years of experience/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute(
      'href',
      '#projects',
    );
  });
});

describe('About', () => {
  it('renders the about section heading and profile image', () => {
    render(<About />);

    expect(
      screen.getByRole('heading', { name: /engineering approach/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Johnson Abraham' }),
    ).toHaveAttribute('src', expect.stringContaining('profile-photo'));
  });
});

describe('Projects', () => {
  it('renders all featured projects with GitHub links', () => {
    render(<Projects />);

    expect(
      screen.getByRole('heading', { name: /featured projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Ishtar')).toBeInTheDocument();
    expect(screen.getByText('AI Chat Application')).toBeInTheDocument();
    expect(screen.getByText('Slate')).toBeInTheDocument();
    expect(screen.getByText('Note-Taking App')).toBeInTheDocument();
    expect(screen.getByText('The Daily Ledger')).toBeInTheDocument();
    expect(
      screen.getByText('High-Performance Analytics Dashboard'),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /open .* on github/i }),
    ).toHaveLength(3);
  });
});

describe('Skills', () => {
  it('renders the main skill categories', () => {
    render(<Skills />);

    expect(
      screen.getByRole('heading', { name: /my technical skills/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    expect(screen.getByText('Backend Development')).toBeInTheDocument();
    expect(screen.getByText('Cloud, Databases & Tools')).toBeInTheDocument();
  });
});

describe('Experience', () => {
  it('renders the experience timeline entries', () => {
    render(<Experience />);

    expect(
      screen.getByRole('heading', { name: /professional experience/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Member of Technical Staff')).toBeInTheDocument();
    expect(screen.getByText('Staff Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });
});
