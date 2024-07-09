import { ThemeProvider } from '@/client/providers/theme-provider';
import { ABOUT } from '@/constants/about';
import { INTRO } from '@/constants/intro';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: `${INTRO.name} | ${INTRO.description}`,
  description: `${ABOUT}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
