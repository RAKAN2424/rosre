import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { Rubik, Tajawal, Anton, Caveat, Paytone_One, Inter } from 'next/font/google';

const googleAdWordsId = 'AW-17614601135';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-caveat',
  display: 'swap',
});

const paytone_one = Paytone_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-paytone-one',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          },
        );
      });
    }
  }, []);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdWordsId}`}
        strategy="afterInteractive" 
      />

      <Script id="google-adwords-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAdWordsId}');
        `}
      </Script>

      {/* ===== خلفية الفيديو لكل الصفحات ===== */}
      <div className="site-bg">
        <video 
          className="site-bg-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
        <source 
  src="https://imagekit.io/player/embed/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A9-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4" 
  type="video/mp4" 
          />
        </video>
        <div className="site-bg-overlay"></div>
      </div>

      <LanguageProvider>
        <div
          className={`${rubik.variable} ${tajawal.variable} ${anton.variable} ${caveat.variable} ${paytone_one.variable} ${inter.variable}`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
