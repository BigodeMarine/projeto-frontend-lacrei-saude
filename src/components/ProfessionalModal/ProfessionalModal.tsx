'use client';

import { useEffect, useRef } from 'react';

import {
  CloseButton,
  Description,
  Location,
  Modal,
  ModalHeader,
  ModalTitle,
  Overlay,
  Specialty,
} from './styles';

interface Professional {
  id: number;
  name: string;
  specialty: string;
  location: string;
  description: string;
}

interface ProfessionalModalProps {
  professional: Professional;
  onClose: () => void;
}

export function ProfessionalModal({
  professional,
  onClose,
}: ProfessionalModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Guarda o elemento que estava focado antes da abertura do modal.
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Move o foco para o botão de fechar assim que o modal é aberto.
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      // Mantém a navegação por Tab dentro do modal.
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');

        if (!modal) {
          return;
        }

        const focusableElements = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements.length === 0) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      // Devolve o foco para o elemento que abriu o modal.
      previousActiveElement.current?.focus();
    };
  }, [onClose]);

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="professional-modal-title"
        aria-describedby="professional-modal-description"
      >
        <ModalHeader>
          <ModalTitle id="professional-modal-title">
            {professional.name}
          </ModalTitle>

          <CloseButton
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar perfil"
            onClick={onClose}
          >
            ×
          </CloseButton>
        </ModalHeader>

        <Specialty>{professional.specialty}</Specialty>

        <Location>{professional.location}</Location>

        <Description id="professional-modal-description">
          {professional.description}
        </Description>
      </Modal>
    </Overlay>
  );
}
