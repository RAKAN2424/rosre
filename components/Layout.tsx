import { FC, ReactNode, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { projects } from '@/lib/data';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const { t, lang, setLang } = useTranslation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isMobileNavOpen);
  }, [isMobileNavOpen]);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-wrap">
          <Link href="/" className="brand" title="SIGHT Home">
            <span className="logo" aria-hidden="true"></span>
          </Link>

          <nav className="nav">
            <div className="nav-item">
              <span className="nav-link" dangerouslySetInnerHTML={{ __html: t('navProps') }} />
              <div className="dropdown-content">
                {projects.map(p => (
                   <Link key={p.slug} href={`/projects/${p.slug}`} className="nav-sitelink">{p.title}</Link>
                ))}
              </div>
            </div>
            <a href="/#services" className="nav-link" dangerouslySetInnerHTML={{ __html: t('navStore') }} />
            <a href="/#contact" className="nav-link" dangerouslySetInnerHTML={{ __html: t('navContact') }} />
            <a href="/#about-section" className="nav-link" dangerouslySetInnerHTML={{ __html: t('navAbout') }} />
          </nav>
          <div className="controls">
            <button onClick={toggleLanguage} className="cta outline" aria-label="Toggle language">
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          <button id="mobileNavToggle" onClick={toggleMobileNav} className="mobile-nav-toggle" aria-label="Open menu" aria-controls="mobileNavOverlay" aria-expanded={isMobileNavOpen}>
            <span className="hamburger-icon"></span>
          </button>
        </div>
      </header>

      <div id="mobileNavOverlay" className="mobile-nav-overlay" role="dialog" aria-modal="true" onClick={() => setMobileNavOpen(false)}>
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <div className="nav-item">
            <span className="nav-link" dangerouslySetInnerHTML={{ __html: t('navProps') }} />
            <div className="dropdown-content">
              {projects.map(p => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="nav-sitelink" onClick={toggleMobileNav}>{p.title}</Link>
              ))}
            </div>
          </div>
          <a href="/#services" className="nav-link" dangerouslySetInnerHTML={{ __html: t('navStore') }} onClick={toggleMobileNav} />
          <a href="/#contact" className="nav-link" dangerouslySetInnerHTML={{ __html: t('navContact') }} onClick={toggleMobileNav} />
          <a href="/#about-section" className="nav-link" dangerouslySetInnerHTML={{ __html: t('navAbout') }} onClick={toggleMobileNav} />
        </nav>
        <div className="controls">
          <button onClick={toggleLanguage} id="langToggleMobile" className="cta outline" aria-label="Toggle language">
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </>
  );
};

const SocialAside: FC = () => {
    const [isQrModalOpen, setQrModalOpen] = useState(false);

    return (
        <>
            <aside className="social" aria-label="Social links">
                <a href="https://www.facebook.com/SIGHTRealEstate.eg" target="_blank" aria-label="Facebook" rel="noopener" title="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/sightrealestate.eg" target="_blank" aria-label="Instagram" rel="noopener" title="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://api.whatsapp.com/send?phone=201099993903" target="_blank" aria-label="WhatsApp" rel="noopener" title="WhatsApp" className="whatsapp-outline">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
                <a href="tel:+201099993903" aria-label="Call" title="Call">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </a>
                <button onClick={() => setQrModalOpen(true)} aria-label="QR Code" title="QR Code">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
                </button>
            </aside>
            {isQrModalOpen && (
                <div className="modal-overlay" onClick={() => setQrModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setQrModalOpen(false)} className="modal-close" aria-label="Close">&times;</button>
                        <img src="https://i.ibb.co/VcMs0Brb/My-Business-Page.png" alt="Scan & Contact QR Code" />
                    </div>
                </div>
            )}
        </>
    );
};

const CookieBar: FC = () => {
    const { t } = useTranslation();
    const [isVisible, setVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAccepted', 'true');
    };

    if (!isMounted || !isVisible) return null;

    return (
        <div className="cookie show">
            <div className="bar">
            <p dangerouslySetInnerHTML={{ __html: t('cookieText') }}/>
            <button onClick={acceptCookies} className="ok" dangerouslySetInnerHTML={{ __html: t('cookieBtn') }} />
            </div>
        </div>
    );
}

const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="section">
            <div className="container glass-panel-wrapper">
                <h3 className="section-title" dangerouslySetInnerHTML={{ __html: t('connectTitle') }} />
                <p style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: t('credits') }} />
            </div>
        </footer>
    );
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isProjectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsProjectPage(router.pathname.startsWith('/projects/'));
  }, [router.pathname]);

  useEffect(() => {
    if (!isMounted) return;

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      // تأكد من عدم وجود تكبير للفيديو
      video.style.objectFit = 'cover';
      video.style.objectPosition = 'center';
      video.play().catch(error => {
        console.warn("Background video autoplay was prevented by the browser.", error);
      });
    }
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [isMounted]);

  useEffect(() => {
    // Add class to body for project-specific styles
    document.body.classList.toggle('project-page', isProjectPage);
  }, [isProjectPage]);

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        {isMounted && (
          <video
            ref={videoRef}
            className="site-bg-video"
            src="https://ik.imagekit.io/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A9-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://i.ibb.co/N6RyK3DS/Whisk-d90fb112b52cd41b24140ec413560fc9dr.jpg"
          />
        )}
        <div className="site-bg-overlay"></div>
      </div>

      <Header />
      <SocialAside />

      <Link href="/" id="home-button" className="home-btn" aria-label="Back to Home" title="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      </Link>

      <main>{children}</main>

      <Footer />
      <CookieBar />
    </>
  );
};

export default Layout;