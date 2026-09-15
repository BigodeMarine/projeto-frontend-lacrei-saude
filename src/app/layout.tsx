import type { Metadata } from 'next';

import { StyledComponentsRegistry } from '@/styles/StyledComponentsRegistry';

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description:
    'Cuidado em saúde com acolhimento, respeito e segurança.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
