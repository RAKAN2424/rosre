import { FC, ReactNode, useState, useEffect } from 'react';
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
            {/* تم تحديث اللوجو هنا */}
            <span 
              className="logo" 
              aria-hidden="true"
              style={{
                backgroundImage: 'url(https://i.ibb.co/ymZ86shD/Untitled-design-1.gif)',
              }}
            ></span>
          </Link>
          <nav className="nav">
            <div className="nav-item">
              <span className="nav-link" dangerouslySetInnerHTML={{ __html: t('navProps') }} />
              <div className="dropdown-content">
                {projects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="nav-sitelink">
                    {p.title}
                  </Link>
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
          <button
            id="mobileNavToggle"
            onClick={toggleMobileNav}
            className="mobile-nav-toggle"
            aria-label="Open menu"
            aria-controls="mobileNavOverlay"
            aria-expanded={isMobileNavOpen}
          >
            <span className="hamburger-icon"></span>
          </button>
        </div>
      </header>
      <div
        id="mobileNavOverlay"
        className="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        onClick={() => setMobileNavOpen(false)}
      >
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <div className="nav-item">
            <span className="nav-link" dangerouslySetInnerHTML={{ __html: t('navProps') }} />
            <div className="dropdown-content">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="nav-sitelink"
                  onClick={toggleMobileNav}
                >
                  {p.title}
                </Link>
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
  return (
    <>
      <aside className="social" aria-label="Social links">
        <a href="https://www.facebook.com/SIGHTRealEstate.eg" target="_blank" aria-label="Facebook" rel="noopener" title="Facebook">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/sightrealestate.eg" target="_blank" aria-label="Instagram" rel="noopener" title="Instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=201099993903" target="_blank" aria-label="WhatsApp" rel="noopener" title="WhatsApp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.48 1.34 5l-1.4 5.02 5.13-1.37c1.45.81 3.09 1.25 4.74 1.25h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2"></path>
          </svg>
        </a>
        <a href="tel:+201099993903" aria-label="Call" title="Call">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 2.01.49 3.92 1.4 5.79z" />
          </svg>
        </a>
      </aside>
    </>
  );
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <>
      <Header />
      <main>{children}</main>
      {isHome && <SocialAside />}
    </>
  );
};

export default Layout;
