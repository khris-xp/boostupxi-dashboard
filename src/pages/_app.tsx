import { Kanit } from '@next/font/google';
import '../styles/globals.css';
import '../styles/star.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={kanit.className}>
      <div>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
          }}
        />
      </div>
      <Component {...pageProps} />
    </main>
  );
}
