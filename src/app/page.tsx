'use client';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import {
  BenefitCard,
  BenefitIcon,
  BenefitsGrid,
  BenefitText,
  BenefitTitle,
  HeroActions,
  HeroContent,
  HeroSection,
  HeroText,
  HeroTitle,
  Main,
  PrimaryButton,
  WelcomeContent,
  WelcomeHeader,
  WelcomeSection,
  WelcomeText,
  WelcomeTitle,
  CareAction,
  CareContent,
  CareDescription,
  CareSection,
  CareText,
  CareTitle,
} from './page.styles';

export default function Home() {
  return (
    <>
      <Header />

      <Main>
        <HeroSection>
          <HeroContent>
            <HeroTitle>
              Cuidado em saúde com acolhimento, respeito e segurança.
            </HeroTitle>

            <HeroText>
              Encontre profissionais de saúde preparados para acolher você,
              respeitando sua história, sua identidade e suas necessidades.
            </HeroText>

            <HeroActions>
              <PrimaryButton href="/buscar">
                Encontrar cuidado
              </PrimaryButton>
            </HeroActions>
          </HeroContent>
        </HeroSection>
        <WelcomeSection>
          <WelcomeContent>
            <WelcomeHeader>
              <WelcomeTitle>
                Um cuidado que respeita quem você é.
              </WelcomeTitle>

              <WelcomeText>
                Acreditamos que todas as pessoas devem encontrar cuidado em saúde
                com respeito, segurança e acolhimento.
              </WelcomeText>
            </WelcomeHeader>

            <BenefitsGrid>
              <BenefitCard>
                <BenefitIcon aria-hidden="true">favorite</BenefitIcon>

                <BenefitTitle>Acolhimento</BenefitTitle>

                <BenefitText>
                  Um espaço onde você pode buscar cuidado sem medo de julgamentos,
                  preconceitos ou discriminação.
                </BenefitText>
              </BenefitCard>

              <BenefitCard>
                <BenefitIcon aria-hidden="true">handshake</BenefitIcon>

                <BenefitTitle>Respeito</BenefitTitle>

                <BenefitText>
                  Profissionais preparados para reconhecer e respeitar diferentes
                  histórias, identidades e necessidades.
                </BenefitText>
              </BenefitCard>

              <BenefitCard>
                <BenefitIcon aria-hidden="true">verified_user</BenefitIcon>

                <BenefitTitle>Segurança</BenefitTitle>

                <BenefitText>
                  Informações claras para que você tenha mais autonomia e confiança
                  na hora de buscar atendimento.
                </BenefitText>
              </BenefitCard>
            </BenefitsGrid>
          </WelcomeContent>
        </WelcomeSection>
        
        <CareSection>
          <CareContent>
            <CareText>
              <CareTitle>
                Encontre um profissional que esteja preparado para acolher você.
              </CareTitle>

              <CareDescription>
                Busque profissionais de saúde e encontre opções de cuidado com mais
                segurança, respeito e autonomia.
              </CareDescription>
            </CareText>

            <CareAction href="/buscar">
              Encontrar profissionais
            </CareAction>
          </CareContent>
        </CareSection>
      </Main>
      <Footer />
    </>
  );
}

