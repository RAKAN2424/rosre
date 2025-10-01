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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="slides">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`slide ${index === currentSlide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: t('heroTitle') }}></h1>
        <p className="tagline" dangerouslySetInnerHTML={{ __html: t('heroTag') }}></p>
        <div className="cta-row">
          <a href="#gallery-section" className="cta" dangerouslySetInnerHTML={{ __html: t('ctaView') }}></a>
          <a
            href={generateWhatsappUrl({})}
            className="cta outline"
            target="_blank"
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{ __html: t('ctaWhatsapp') }}
          ></a>
        </div>
      </div>
      <div id="dots" className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'is-active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
      <div className="hero-fade-bottom"></div>
    </section>
  );
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation();
  return (
    <Link href={`/projects/${project.slug}`} className="card-link">
      <article className="card">
        <div className="thumb" style={{ backgroundImage: `url('${project.thumb}')` }}></div>
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <span className="price">{project.price}</span>
          <div className="card-cta-wrapper">
            <span className="btn card-cta" dangerouslySetInnerHTML={{ __html: t('viewDetails') }} />
          </div>
        </div>
      </article>
    </Link>
  );
};

const PropertyGallery: FC<{ projects: Project[] }> = ({ projects }) => {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate({ threshold: 0.05 });
  return (
    <section id="gallery-section" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('galleryTitle') }} />
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection: FC = () => {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate({ threshold: 0.1 });
  return (
    <section id="services" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" data-i18n="ourServices" dangerouslySetInnerHTML={{ __html: t('ourServices') }} />
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21V3m0 0-4 4M12 3l4 4" />
                <path d="M3 13.25a9 9 0 1 0 18 0" />
                <path d="M12 12v-1.25a4.5 4.5 0 0 0-4.5-4.5h-1.5" />
              </svg>
            </div>
            <h3 className="service-title" dangerouslySetInnerHTML={{ __html: t('service1Title') }} />
            <p className="service-desc" dangerouslySetInnerHTML={{ __html: t('service1Desc') }} />
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="service-title" dangerouslySetInnerHTML={{ __html: t('service2Title') }} />
            <p className="service-desc" dangerouslySetInnerHTML={{ __html: t('service2Desc') }} />
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14.5 3.5-1.5 1.5 2.5 2.5 1.5-1.5-2.5-2.5z"></path>
                <path d="M13.5 6.5 7 13l-4 4 6 6 7-7-3.5-3.5z"></path>
                <path d="m18 11 1-1"></path>
                <path d="m19 12 1-1"></path>
                <path d="m2 22 6-6"></path>
                <path d="m3.5 17.5 4-4"></path>
              </svg>
            </div>
            <h3 className="service-title" dangerouslySetInnerHTML={{ __html: t('service3Title') }} />
            <p className="service-desc" dangerouslySetInnerHTML={{ __html: t('service3Desc') }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('about');
  const sectionRef = useScrollAnimate();
  return (
    <section id="about-section" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <div className="segbar">
          <button
            className={`seg-btn ${activeTab === 'about' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('about')}
            dangerouslySetInnerHTML={{ __html: t('aboutTab') }}
          />
          <button
            className={`seg-btn ${activeTab === 'location' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('location')}
            dangerouslySetInnerHTML={{ __html: t('locTab') }}
          />
        </div>
        <div className="segpanels">
          <div id="about" className={`panel ${activeTab === 'about' ? 'show' : ''}`}>
            <div className="about-card">
              <div className="about-hero" style={{ backgroundImage: "url('https://i.ibb.co/ZzBR3fDD/Untitled-design.png')" }}></div>
              <div className="about-text">
                <ul className="about-values">
                  <li>A trusted presence across every governorate in Egypt.</li>
                  <li>Property offerings tailored to the needs of businesses and private buyers.</li>
                  <li>Integrated, sustainable solutions that deliver long-term value.</li>
                  <li>Clients come first. Profit is secondary; true success is seeing people thrive.</li>
                  <li>We act with integrity to make sure you get what you are owed.</li>
                  <li>We guide you to the right property that fits your needs and comfort.</li>
                  <li>We provide continuous support and follow-up — not a one-time sale focused only on profit.</li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: t('credits') }} />
              </div>
            </div>
          </div>
          <div id="location" className={`panel ${activeTab === 'location' ? 'show' : ''}`}>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.894326998634!2d29.95133541514271!3d31.19942208147665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3d7b8be9e6f%3A0x8c6d8665261498a7!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm: FC = () => {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const handleSend = () => {
    const url = generateWhatsappUrl({ name, phone, email });
    window.open(url, '_blank');
  };
  return (
    <section id="contact" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('requestCallback') }} />
        <div className="contact">
          <div className="form">
            <div className="form-hero" style={{ backgroundImage: "url('https://i.ibb.co/0RS3Dvhd/f23dfca5-21bc-4bf8-a561-1f012c3e7582.png')" }}></div>
            <h4 dangerouslySetInnerHTML={{ __html: t('formTitle') }} />
            <div className="field">
              <span dangerouslySetInnerHTML={{ __html: t('name') }} />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t('namePh')} />
            </div>
            <div className="field">
              <span dangerouslySetInnerHTML={{ __html: t('phone') }} />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t('phonePh')} />
            </div>
            <div className="field">
              <span dangerouslySetInnerHTML={{ __html: t('email') }} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('emailPh')} />
            </div>
            <button onClick={handleSend} className="btn send book" dangerouslySetInnerHTML={{ __html: t('sendWhats') }} />

            {/* إضافة رابط واتساب مباشر كـ Site Link */}
            <a
              href="https://wa.me/201099993903"
              target="_blank"
              rel="noopener noreferrer"
              className="btn site-link whatsapp-direct"
              aria-label="Contact via WhatsApp"
              style={{ marginTop: '16px', display: 'block', textAlign: 'center' }}
            >
              تواصل معنا مباشرة على WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface HomePageProps {
  projects: Project[];
}

const HomePage: FC<HomePageProps> = ({ projects }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // التمرير التلقائي إلى قسم الهيرو عند تحميل الصفحة
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Head>
        <title>SIGHT Real Estate Development</title>
      </Head>
      <div ref={heroRef}>
        <Hero />
      </div>
      <PropertyGallery projects={projects} />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

export default HomePage;


[https://imagekit.io/player/embed/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A9-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4](https://imagekit.io/player/embed/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A9-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4)  اعمل ده باك جروند لكلكل الصفحات  تبقى الخلفيه الاساسيه وحافظ على الكواليتى بتعها تشتغل اتواماتيك  تتعاد  وخلى التبويب او اى تابس شفافه اسود  زى الزجاج   شفاف والخلفيه الاساسيه للموقع الفيديو ده واتاكد انو شغال هو نوعه المشروع نكستjs كان html الاول وتحسه مخلط ف اتاكد انو شغال  لان بحطها مش شغالة واتاكد ان كل اعلان من الاعلانات   نفس الخلفيه الاساسيه الفيديو   وحطلى اللوجو ف الصفحه الامامية الهيرو فوق على الشمال  حط اللوجو ده رفعهولك اهو  ممنوع تغير اى سشكن او تاب او اللوان  او  تعدل ف منشور اعمل المطلوب بس وراجع كل الملفات المرفوعه لو ف مشكله ف حاجه فيهم تقولى الاول قبل ما تعمل حاجه [https://i.ibb.co/ymZ86shD/Untitled-design-1.gif](https://i.ibb.co/ymZ86shD/Untitled-design-1.gif)  ده اللوجو حطه فوق على الشمال بدل الى محطوط لونه ازرق وغلط   وزود الالوان كلها   5 درجات كمان  وححاول تعمل لليد فورم من جوه موقعى سايت لينك
