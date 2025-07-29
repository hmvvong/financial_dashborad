import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
// import { bebas_neue } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://financial-dashborad-iota.vercel.app'),
  openGraph: {
    title: 'Financial Dashboard',
    description: 'Track your finances easily with our dashboard.',
    images: ['/opengraph-image.png'], // this becomes a full absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
