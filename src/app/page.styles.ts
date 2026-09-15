import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
`;

export const HeroSection = styled.section`
  width: 100%;
  min-height: 520px;
  padding: 64px 24px;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.gradient.primary};

  @media (min-width: 960px) {
    min-height: 680px;
    padding: 80px 48px;
  }

  @media (min-width: 1200px) {
    padding: 96px 64px;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.text.invert};

  @media (min-width: 960px) {
    max-width: 760px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 16px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 960px) {
    font-size: 48px;
  }
`;

export const HeroText = styled.p`
  max-width: 680px;
  margin-bottom: 32px;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PrimaryButton = styled.a`
  min-height: 48px;
  padding: 12px 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${({ theme }) => theme.colors.background.default};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.success};
    color: ${({ theme }) => theme.colors.text.hover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusOffset};
    outline-offset: 3px;
  }

  &:active {
    background: ${({ theme }) => theme.colors.background.subtle};
    color: ${({ theme }) => theme.colors.text.pressed};
  }
`;

export const WelcomeSection = styled.section`
  width: 100%;
  padding: 64px 24px;

  background: ${({ theme }) => theme.colors.background.default};

  @media (min-width: 960px) {
    padding: 80px 48px;
  }

  @media (min-width: 1200px) {
    padding: 96px 64px;
  }
`;

export const WelcomeContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const WelcomeHeader = styled.div`
  max-width: 720px;
  margin-bottom: 32px;

  @media (max-width: 959px) {
    margin-bottom: 24px;
  }
`;

export const WelcomeTitle = styled.h2`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 960px) {
    font-size: 40px;
  }
`;

export const WelcomeText = styled.p`
  color: ${({ theme }) => theme.colors.text.body};

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

export const BenefitCard = styled.article`
  padding: 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.default};

  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(1 76 55 / 10%);
  }

  @media (min-width: 960px) {
    padding: 32px;
  }
`;

export const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.background.success};
  color: ${({ theme }) => theme.colors.icon.accent};

  font-family: 'Material Symbols Rounded';
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: 1;

  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

export const BenefitTitle = styled.h3`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
`;

export const BenefitText = styled.p`
  color: ${({ theme }) => theme.colors.text.body};

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CareSection = styled.section`
  width: 100%;
  padding: 64px 24px;

  background: ${({ theme }) => theme.colors.background.success};

  @media (min-width: 960px) {
    padding: 80px 48px;
  }

  @media (min-width: 1200px) {
    padding: 96px 64px;
  }
`;

export const CareContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
  }
`;

export const CareText = styled.div`
  max-width: 680px;
`;

export const CareTitle = styled.h2`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 960px) {
    font-size: 40px;
  }
`;

export const CareDescription = styled.p`
  margin-bottom: 32px;

  color: ${({ theme }) => theme.colors.text.body};

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CareAction = styled.a`
  min-height: 48px;
  padding: 12px 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  align-self: flex-start;

  border: 2px solid ${({ theme }) => theme.colors.background.accent};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.accent};
  color: ${({ theme }) => theme.colors.text.invert};

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background.accentHover};
    border-color: ${({ theme }) => theme.colors.background.accentHover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 3px;
  }

  &:active {
    background: ${({ theme }) => theme.colors.background.accentPressed};
    border-color: ${({ theme }) => theme.colors.background.accentPressed};
  }
`;