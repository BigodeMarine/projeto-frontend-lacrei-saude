'use client';
import {
  FooterBottom,
  FooterBrand,
  FooterColumn,
  FooterContainer,
  FooterContent,
  FooterDescription,
  FooterLink,
  FooterLogo,
  FooterTitle,
} from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <FooterLogo href="/" aria-label="Lacrei Saúde - página inicial">
            Lacrei Saúde
          </FooterLogo>

          <FooterDescription>
            Cuidado em saúde com acolhimento, respeito e segurança para todas
            as pessoas.
          </FooterDescription>
        </FooterBrand>

        <FooterColumn>
          <FooterTitle>Navegação</FooterTitle>

          <FooterLink href="/">Quem somos</FooterLink>
          <FooterLink href="/buscar">Encontrar cuidado</FooterLink>
          <FooterLink href="/ajuda">Ajuda</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Para você</FooterTitle>

          <FooterLink href="/buscar">Encontrar profissionais</FooterLink>
          <FooterLink href="/entrar">Entrar</FooterLink>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        © 2026 Lacrei Saúde. Cuidado, respeito e acolhimento.
      </FooterBottom>
    </FooterContainer>
  );
}