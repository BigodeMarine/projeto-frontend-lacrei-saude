'use client';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { ProfessionalModal } from '@/components/ProfessionalModal/ProfessionalModal';

import {
  Main,
  ProfessionalCard,
  ProfessionalLocation,
  ProfessionalName,
  ProfessionalSpecialty,
  ProfileButton,
  ResultsGrid,
  ResultsHeader,
  ResultsTitle,
  SearchButton,
  SearchContent,
  SearchDescription,
  SearchField,
  SearchForm,
  SearchHero,
  SearchHeroContent,
  SearchInput,
  SearchLabel,
  SearchSection,
  SearchTitle,
} from './page.styles';
import { useEffect, FormEvent, useState } from 'react';
import {
  getProfessionals,
  type Professional,
} from '@/services/professionals';



export default function BuscarPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Professional[]>([]);
  const [allProfessionals, setAllProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    async function loadProfessionals() {
      const data = await getProfessionals();

      setAllProfessionals(data);
      setSearchResults(data);
      setIsLoading(false);
    }

    loadProfessionals();
  }, []);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      setSearchResults(allProfessionals);
      return;
    }

    const filteredProfessionals = allProfessionals.filter((professional) => {
      return (
        professional.name.toLowerCase().includes(normalizedTerm) ||
        professional.specialty.toLowerCase().includes(normalizedTerm) ||
        professional.location.toLowerCase().includes(normalizedTerm)
      );
    });

    setSearchResults(filteredProfessionals);
  }
  return (
    <>
      <Header />

      <Main>
        <SearchHero>
          <SearchHeroContent>
            <ResultsTitle aria-live="polite">
              {searchResults.length === 0
                ? 'Nenhum profissional encontrado'
                : `${searchResults.length} profissionais disponíveis`}
            </ResultsTitle>

            <SearchDescription>
              Busque profissionais de saúde preparados para oferecer um
              atendimento acolhedor, respeitoso e livre de preconceitos.
            </SearchDescription>
          </SearchHeroContent>
        </SearchHero>

        <SearchSection>
          <SearchContent>
            <SearchForm onSubmit={handleSearch}>
              <SearchField>
                <SearchLabel htmlFor="search">
                  O que você está procurando?
                </SearchLabel>

                <SearchInput
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Ex.: psicólogo, ginecologista..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </SearchField>

              <SearchButton type="submit">
                Buscar profissionais
              </SearchButton>
            </SearchForm>

            <ResultsHeader>
              <ResultsTitle>Profissionais disponíveis</ResultsTitle>
            </ResultsHeader>
            {isLoading ? (
              <p>Carregando profissionais...</p>
            ) : (
              <ResultsGrid>
                {searchResults.map((professional) => (
                  <ProfessionalCard key={professional.id}>
                    <ProfessionalName>{professional.name}</ProfessionalName>

                    <ProfessionalSpecialty>
                      {professional.specialty}
                    </ProfessionalSpecialty>

                    <ProfessionalLocation>
                      {professional.location}
                    </ProfessionalLocation>

                    <ProfileButton
                      type="button"
                      onClick={() => setSelectedProfessional(professional)}
                    >
                      Ver perfil
                    </ProfileButton>
                  </ProfessionalCard>
                ))}
              </ResultsGrid>
            )}
          </SearchContent>
        </SearchSection>
      </Main>
      {selectedProfessional && (
        <ProfessionalModal
          professional={selectedProfessional}
          onClose={() => setSelectedProfessional(null)}
        />
      )}
      <Footer />
    </>
  );
}