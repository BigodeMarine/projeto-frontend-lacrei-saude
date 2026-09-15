import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
`;

export const SearchHero = styled.section`
  width: 100%;
  padding: 48px 24px;

  background: ${({ theme }) => theme.colors.background.success};

  @media (min-width: 960px) {
    padding: 64px 48px;
  }

  @media (min-width: 1200px) {
    padding: 80px 64px;
  }
`;

export const SearchHeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchTitle = styled.h1`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 960px) {
    font-size: 48px;
  }
`;

export const SearchDescription = styled.p`
  max-width: 720px;

  color: ${({ theme }) => theme.colors.text.body};

  font-size: 18px;
  line-height: 1.5;
`;

export const SearchSection = styled.section`
  width: 100%;
  padding: 48px 24px;

  background: ${({ theme }) => theme.colors.background.default};

  @media (min-width: 960px) {
    padding: 64px 48px;
  }

  @media (min-width: 1200px) {
    padding: 80px 64px;
  }
`;

export const SearchContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  margin-bottom: 40px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr auto;
    align-items: end;
  }
`;

export const SearchField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SearchLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

export const SearchInput = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 12px 16px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.body};

  font-size: 16px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 2px;
    border-color: ${({ theme }) => theme.colors.border.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;

export const SearchButton = styled.button`
  min-height: 48px;
  padding: 12px 24px;

  border: 2px solid ${({ theme }) => theme.colors.background.accent};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.accent};
  color: ${({ theme }) => theme.colors.text.invert};

  font-size: 16px;
  font-weight: 700;

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

export const ResultsHeader = styled.div`
  margin-bottom: 24px;

  @media (min-width: 960px) {
    margin-bottom: 32px;
  }
`;

export const ResultsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProfessionalCard = styled.article`
  padding: 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.default};

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
    box-shadow: 0 4px 16px rgb(1 76 55 / 10%);
  }
`;

export const ProfessionalName = styled.h3`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

export const ProfessionalSpecialty = styled.p`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

export const ProfessionalLocation = styled.p`
  margin-bottom: 32px;

  color: ${({ theme }) => theme.colors.text.body};

  font-size: 14px;
  line-height: 1.5;
`;

export const ProfileButton = styled.button`
  width: 100%;
  min-height: 48px;
  padding: 12px 16px;

  border: 2px solid ${({ theme }) => theme.colors.border.accent};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 16px;
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme.colors.background.success};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 3px;
  }

  &:active {
    background: ${({ theme }) => theme.colors.background.successPressed};
  }
`;