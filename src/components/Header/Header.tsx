'use client';

import { useEffect, useRef, useState } from 'react';

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  MenuButton,
  Navigation,
  NavigationLink,
  MobileNavigation,
} from './styles';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  function handleMenuToggle() {
    setMenuOpen((currentState) => !currentState);
  }

function handleNavigation() {
  setMenuOpen(false);
}

function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
  if (event.key === 'Escape') {
    setMenuOpen(false);
  }
}
  useEffect(() => {
    if (menuOpen) {
      // Move o foco para o primeiro item do menu ao abri-lo.
      firstMenuLinkRef.current?.focus();
    } else {
      // Devolve o foco para o botão ao fechar o menu.
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/" aria-label="Lacrei Saúde - página inicial">
          Lacrei Saúde
        </Logo>

        <Navigation aria-label="Navegação principal">
          <NavigationLink href="/">Quem somos</NavigationLink>
          <NavigationLink href="/ajuda">Ajuda</NavigationLink>
          <NavigationLink href="/entrar">Entrar</NavigationLink>
        </Navigation>

        <MenuButton
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={handleMenuToggle}
        >
          {menuOpen ? '×' : '☰'}
        </MenuButton>
      </HeaderContent>

      {menuOpen && (
        <MobileNavigation id="mobile-navigation" aria-label="Menu mobile" onKeyDown={handleKeyDown}>
          <NavigationLink
            ref={firstMenuLinkRef}
            href="/"
            onClick={handleNavigation}
          >
            Quem somos
          </NavigationLink>

          <NavigationLink href="/ajuda" onClick={handleNavigation}>
            Ajuda
          </NavigationLink>

          <NavigationLink href="/entrar" onClick={handleNavigation}>
            Entrar
          </NavigationLink>
        </MobileNavigation>
      )}
    </HeaderContainer>
  );
}