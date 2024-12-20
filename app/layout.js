import localFont from 'next/font/local';
import './globals.css';
import NavBar from '@/components/navbar/nav';

export const metadata = {
  title: 'Destiny Eze Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app relative ">
          <NavBar />
          <div className="mt-16">{children}</div>
        </main>
      </body>
    </html>
  );
}
