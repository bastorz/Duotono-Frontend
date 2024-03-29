import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from '@/lib/toaster-provider';
import Whatsapp from '@/components/contacto/whatsapp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Duotono Design',
  description:
    'Duotono Design: Donde el Arte se Encuentra con la Elegancia en Cada Matiz.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Whatsapp />
        {children}
      </body>
    </html>
  );
}
