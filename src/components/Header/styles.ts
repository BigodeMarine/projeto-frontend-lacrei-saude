import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.gradient.subtle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.divider};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 72px;
  margin: 0 auto;
  padding: 16px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const NavigationLink = styled.a`
  color: ${({ theme }) => theme.colors.text.body};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.hover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 4px;
    border-radius: 4px;
  }

  &:active {
    color: ${({ theme }) => theme.colors.text.pressed};
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.icon.default};

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.icon.hover};
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 2px;
  }

  &:active {
    color: ${({ theme }) => theme.colors.icon.pressed};
  }
`;
export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px 24px 24px;

  border-top: 1px solid ${({ theme }) => theme.colors.border.divider};
  background: ${({ theme }) => theme.colors.background.default};

  @media (min-width: 768px) {
    display: none;
  }

  ${NavigationLink} {
    width: 100%;
    padding: 12px 8px;
  }
`;