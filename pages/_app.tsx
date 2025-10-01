import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script'; // **تم إضافة هذا الاستيراد**
import { LanguageProvider } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { Rubik, Tajawal, Anton, Caveat, Paytone_One, Inter } from 'next/font/google';

// ==============================================
// تعريف مُعرّف Google Ads
// ==============================================
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
    // كود Service Worker
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
      {/*
        ==============================================
        1. شارة Google Tag (gtag.js) - يتم تحميل الكود هنا
        ==============================================
      */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdWordsId}`}
        // استراتيجية التحميل: يتم التحميل بعد التفاعل الأولي لتحسين الأداء
        strategy="afterInteractive" 
      />

      {/*
        ==============================================
        2. دالة تهيئة Google Tag
        ==============================================
      */}
      <Script id="google-adwords-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${googleAdWordsId}');
        `}
      </Script>

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
