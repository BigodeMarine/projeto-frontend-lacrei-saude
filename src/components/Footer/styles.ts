import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.emerald[80]};
  color: ${({ theme }) => theme.colors.text.invert};
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 32px;
    padding: 64px 48px;
  }

  @media (min-width: 1200px) {
    padding: 64px;
  }
`;

export const FooterBrand = styled.div`
  max-width: 360px;
`;

export const FooterLogo = styled.a`
  display: inline-block;
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.emerald[10]};

  font-size: 14px;
  line-height: 1.5;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterTitle = styled.h2`
  margin-bottom: 16px;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

export const FooterLink = styled.a`
  width: fit-content;

  color: ${({ theme }) => theme.colors.emerald[10]};

  font-size: 14px;
  line-height: 1.5;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[10]};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;

  border-top: 1px solid ${({ theme }) => theme.colors.emerald[70]};

  color: ${({ theme }) => theme.colors.emerald[20]};

  font-size: 12px;
  line-height: 1.5;

  @media (min-width: 960px) {
    padding: 20px 48px;
  }

  @media (min-width: 1200px) {
    padding: 20px 64px;
  }
`;