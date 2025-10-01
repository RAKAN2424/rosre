import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const googleAdWordsId = 'AW-17614601135';

  return (
    // تم إضافة سمة dir="rtl" هنا لضمان اتجاه الكتابة من اليمين لليسار
    <Html lang="ar" dir="rtl">
      <Head>
        {/* ==============================================
          Google Tag (gtag.js) - تمت الإضافة هنا
          ============================================== */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdWordsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdWordsId}');
            `,
          }}
        />
        {/* ============================================== */}
        
        <meta
          name="description"
          content="SIGHT Real Estate Development — Sustainable solutions and strategic locations for office & commercial spaces."
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050505" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SIGHT" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
