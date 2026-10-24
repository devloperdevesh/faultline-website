import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Faultline — From findings to verified fixes',
  description: 'An open-source security remediation platform designed to connect vulnerability discovery, reviewable fixes, verification, and auditable evidence.',
  keywords: ['security remediation', 'vulnerability management', 'open source security', 'verification'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
