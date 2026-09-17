import { fireEvent, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import BuscarPage from './page';
import { renderWithTheme } from '@/test/render';
import {
  getProfessionals,
  type Professional,
} from '@/services/professionals';

vi.mock('@/services/professionals', () => ({
  getProfessionals: vi.fn(),
}));

const professionals: Professional[] = [
  {
    id: 1,
    name: 'Ana Silva',
    specialty: 'Psicóloga',
    location: 'São Paulo',
    description: 'Atendimento psicológico acolhedor e humanizado.',
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    specialty: 'Ginecologista',
    location: 'Curitiba',
    description: 'Atendimento ginecológico com abordagem acolhedora.',
  },
];

describe('BuscarPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(getProfessionals).mockResolvedValue(professionals);
  });

  it('exibe o estado de carregamento inicialmente', () => {
    vi.mocked(getProfessionals).mockReturnValue(
      new Promise(() => {}),
    );

    renderWithTheme(<BuscarPage />);

    expect(
      screen.getByText('Carregando profissionais...'),
    ).toBeInTheDocument();
  });

  it('carrega e exibe os profissionais', async () => {
    renderWithTheme(<BuscarPage />);

    expect(
      await screen.findByText('Ana Silva'),
    ).toBeInTheDocument();

    expect(screen.getByText('Carlos Oliveira')).toBeInTheDocument();
    expect(screen.getByText('Psicóloga')).toBeInTheDocument();
    expect(screen.getByText('Ginecologista')).toBeInTheDocument();
  });

  it('filtra profissionais pelo nome', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, {
      target: { value: 'ana' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Buscar profissionais',
      }),
    );

    expect(screen.getByText('Ana Silva')).toBeInTheDocument();
    expect(screen.queryByText('Carlos Oliveira')).not.toBeInTheDocument();
  });

  it('filtra profissionais pela especialidade', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, {
      target: { value: 'ginecologista' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Buscar profissionais',
      }),
    );

    expect(screen.getByText('Carlos Oliveira')).toBeInTheDocument();
    expect(screen.queryByText('Ana Silva')).not.toBeInTheDocument();
  });

  it('filtra profissionais pela localização', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, {
      target: { value: 'curitiba' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Buscar profissionais',
      }),
    );

    expect(screen.getByText('Carlos Oliveira')).toBeInTheDocument();
    expect(screen.queryByText('Ana Silva')).not.toBeInTheDocument();
  });

  it('exibe mensagem quando a busca não encontra resultados', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, {
      target: { value: 'dentista' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Buscar profissionais',
      }),
    );

    expect(
      await screen.findByText('Nenhum profissional encontrado'),
    ).toBeInTheDocument();

    expect(screen.queryByText('Ana Silva')).not.toBeInTheDocument();
    expect(screen.queryByText('Carlos Oliveira')).not.toBeInTheDocument();
  });

  it('restaura todos os profissionais quando a busca fica vazia', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    const input = screen.getByRole('searchbox');

    fireEvent.change(input, {
      target: { value: 'ana' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Buscar profissionais',
      }),
    );

    expect(screen.queryByText('Carlos Oliveira')).not.toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: '' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Buscar profissionais',
      }),
    );

    expect(screen.getByText('Ana Silva')).toBeInTheDocument();
    expect(screen.getByText('Carlos Oliveira')).toBeInTheDocument();
  });

  it('abre o modal ao clicar em Ver perfil', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    const profileButtons = screen.getAllByRole('button', {
      name: 'Ver perfil',
    });

    fireEvent.click(profileButtons[0]);

    expect(
      await screen.findByRole('dialog'),
    ).toBeInTheDocument();
  });

  it('fecha o modal pelo botão de fechar', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    fireEvent.click(
      screen.getAllByRole('button', {
        name: 'Ver perfil',
      })[0],
    );

    const dialog = await screen.findByRole('dialog');

    expect(dialog).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {
      name: /fechar/i,
    });

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('fecha o modal ao pressionar Escape', async () => {
    renderWithTheme(<BuscarPage />);

    await screen.findByText('Ana Silva');

    fireEvent.click(
      screen.getAllByRole('button', {
        name: 'Ver perfil',
      })[0],
    );

    expect(await screen.findByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document, {
      key: 'Escape',
    });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});

