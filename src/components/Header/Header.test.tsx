import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithTheme } from '@/test/render';
import { Header } from './Header';

describe('Header', () => {
    it('deve renderizar a navegação principal', () => {
        renderWithTheme(<Header />);

        expect(
            screen.getByRole('link', {
                name: 'Lacrei Saúde - página inicial',
            }),
        ).toBeInTheDocument();

        expect(screen.getByText('Quem somos')).toBeInTheDocument();
        expect(screen.getByText('Ajuda')).toBeInTheDocument();
        expect(screen.getByText('Entrar')).toBeInTheDocument();
    });

    it('deve abrir e fechar o menu mobile', () => {
        renderWithTheme(<Header />);

        const menuButton = screen.getByRole('button', {
            name: 'Abrir menu',
        });

        expect(menuButton).toHaveAttribute('aria-expanded', 'false');

        fireEvent.click(menuButton);

        expect(
            screen.getByRole('button', {
                name: 'Fechar menu',
            }),
        ).toHaveAttribute('aria-expanded', 'true');

        const mobileMenu = screen.getByRole('navigation', {
            name: 'Menu mobile',
        });

        expect(mobileMenu).toBeInTheDocument();

        expect(
            mobileMenu.querySelector('a[href="/"]'),
        ).toHaveTextContent('Quem somos');

        fireEvent.click(
            screen.getByRole('button', {
                name: 'Fechar menu',
            }),
        );

        expect(
            screen.getByRole('button', {
                name: 'Abrir menu',
            }),
        ).toHaveAttribute('aria-expanded', 'false');
    });
});