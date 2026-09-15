import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(19 19 19 / 70%);
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 48px);

  overflow-y: auto;

  padding: 32px;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.body};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.heading};

  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
`;

export const CloseButton = styled.button`
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.icon.default};

  font-size: 24px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
    color: ${({ theme }) => theme.colors.icon.hover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.border.focusInfo};
    outline-offset: 3px;
  }
`;

export const Specialty = styled.p`
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.text.accent};

  font-size: 18px;
  font-weight: 700;
`;

export const Location = styled.p`
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.text.body};

  font-size: 16px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.body};

  font-size: 16px;
  line-height: 1.5;
`;