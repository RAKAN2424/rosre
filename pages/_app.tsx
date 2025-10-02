import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // إضافة scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // مراقبة العناصر للanimation
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(el => observer.observe(el));

    // إضافة segment buttons functionality
    const setupSegmentButtons = () => {
      const segButtons = document.querySelectorAll('.seg-btn');
      const panels = document.querySelectorAll('.panel');

      segButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = (e.target as HTMLElement).getAttribute('data-target');

          // إزالة active من جميع الأزرار
          segButtons.forEach(btn => btn.classList.remove('is-active'));
          // إضافة active للزر المضغوط
          (e.target as HTMLElement).classList.add('is-active');

          // إخفاء جميع الpanels
          panels.forEach(panel => panel.classList.remove('show'));
          // إظهار الpanel المطلوب
          const targetPanel = document.getElementById(target || '');
          if (targetPanel) {
            targetPanel.classList.add('show');
          }
        });
      });
    };

    // تشغيل الsetup بعد تحميل الصفحة
    setTimeout(setupSegmentButtons, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Anton:wght@400&family=Caveat:wght@400;600&family=Inter:wght@400;600;800&family=Paytone+One&family=Rubik:wght@400;600;700;800&family=Tajawal:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />

        {/* PWA meta tags */}
        <meta name="theme-color" content="#FFD54F" />
        <link rel="manifest" href="/manifest.json" />

        {/* SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SIGHT Real Estate Development" />
      </Head>

      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </>
  );
}

export default MyApp;