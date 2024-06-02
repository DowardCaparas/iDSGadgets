import './globals.css';

import { Footer, NavBar } from '@/components';

export const metadata = {
  title: 'DS Gadgets',
  description: 'Discover the best gadgets in the world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className=" scroll-smooth">
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}