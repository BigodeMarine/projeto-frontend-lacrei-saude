import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithTheme } from '@/test/render';
import { Footer } from './Footer';

describe('Footer', () => {
  it('deve renderizar os principais links de navegação', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('link', {
        name: 'Lacrei Saúde - página inicial',
      }),
    ).toHaveAttribute('href', '/');

    expect(screen.getByRole('link', { name: 'Quem somos' })).toHaveAttribute(
      'href',
      '/',
    );

    expect(
      screen.getByRole('link', { name: 'Encontrar cuidado' }),
    ).toHaveAttribute('href', '/buscar');

    expect(screen.getByRole('link', { name: 'Ajuda' })).toHaveAttribute(
      'href',
      '/ajuda',
    );

    expect(
      screen.getByRole('link', { name: 'Encontrar profissionais' }),
    ).toHaveAttribute('href', '/buscar');

    expect(screen.getByRole('link', { name: 'Entrar' })).toHaveAttribute(
      'href',
      '/entrar',
    );
  });
});