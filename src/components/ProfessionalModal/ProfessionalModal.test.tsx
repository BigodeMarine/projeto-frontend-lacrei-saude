import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { renderWithTheme } from '@/test/render';
import { ProfessionalModal } from './ProfessionalModal';

const professional = {
  id: 1,
  name: 'Dra. Ana Souza',
  specialty: 'Psicologia',
  location: 'Curitiba - PR',
  description: 'Atendimento acolhedor e respeitoso.',
};

describe('ProfessionalModal', () => {
  it('deve focar o botão de fechar e fechar com Escape', () => {
    const onClose = vi.fn();

    renderWithTheme(
      <ProfessionalModal
        professional={professional}
        onClose={onClose}
      />,
    );

    const modal = screen.getByRole('dialog');

    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {
      name: 'Fechar perfil',
    });

    expect(closeButton).toHaveFocus();

    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      }),
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});