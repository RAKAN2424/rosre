export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  thumb: string;
  heroImage: string;
  description: string;
  highlights: string[];
  gallery: string[];
  paymentPlan: { label: string; value: string }[];
  prices: { unit: string; area: string; price: string }[];
  virtualTourUrl?: string;
  siteLink?: string; // حقل جديد
}

export const projects: Project[] = [
  {
    slug: 'mazarine',
    title: 'Mazarine',
    subtitle: 'New Alamein • By City Edge Developments',
    price: 'From EGP 7,287,000',
    thumb: 'https://i.ibb.co/LDNDwg7B/Whisk-df74f5decd0f5df911843fe1b702788bdr.jpg',
    heroImage: 'https://i.ibb.co/LDNDwg7B/Whisk-df74f5decd0f5df911843fe1b702788bdr.jpg',
    description: 'Mazarine Apartments features a wide variety of contemporary residential, penthouses, and mixed-use units…',
    highlights: [
      'Developer: City Edge Developments.',
      'Unit Area: 140 m².',
      'Prime lagoon-front community inside New Alamein.',
    ],
    gallery: [
      "https://i.ibb.co/MTQF5zY/Whisk-52d6fb0f49b204aa3d34708873afcd75dr-1.jpg",
      "https://i.ibb.co/LzTc5146/Whisk-66cb3ade99daddb94064a6ada97f58fcdr.jpg",
      "https://i.ibb.co/9kPt8BGK/Whisk-354ed78ba8c78ec8233447644bc63d53dr.jpg",
      "https://i.ibb.co/nMVWd44K/Whisk-4382ffd80bffec7998a4a98260310130dr.jpg",
      "https://i.ibb.co/PZXMsfd8/Whisk-402fac5e05006f693714b0ea61cb74bfdr.jpg",
      "https://i.ibb.co/nq4RQyNy/Whisk-ca3341ce6e5749090e840e8922316a26dr.jpg"
    ],
    paymentPlan: [
        { label: 'Price', value: 'EGP 7,287,000' },
        { label: 'Down Payment (1.2%)', value: '~ 87,444 EGP' },
        { label: 'After 3 months (5%)', value: '~ 364,350 EGP' },
        { label: 'Monthly Installment', value: '~ 21,635 EGP' },
        { label: 'Second Year (5%)', value: '~ 364,350 EGP' },
        { label: 'Third Year (10%)', value: '~ 728,700 EGP' },
        { label: 'Fourth Year (4.5%)', value: '~ 327,915 EGP' },
    ],
    prices: [
      { unit: 'Apartment', area: '140 m²', price: 'EGP 7,287,000' }
    ],
    siteLink: '#' // ضع الرابط الفعلي هنا
  },
  // ... باقي المشاريع بنفس الطريقة
];

export const translations = {
    en: {
      navProps: 'Properties',
      navStore: 'Services',
      navContact: 'Contact',
      navAbout: 'About',
      heroTitle: 'SIGHT REAL ESTATE <strong>DEVELOPMENT</strong>',
      heroTag: 'Sustainable solutions and strategic locations for office & commercial spaces.',
      ctaView: 'View Gallery',
      ctaWhatsapp: 'WhatsApp',
      galleryTitle: 'PROPERTY GALLERY',
      viewDetails: 'View Details',
      highlights: 'Highlights',
      gallery: 'Gallery',
      paymentPlan: 'Payment Plan',
      prices: 'Prices',
      unit: 'Unit',
      area: 'Area',
      price: 'Price',
      bookNow: 'Book Now',
      backToHome: 'Back to Home',
      virtualTour: '360° Virtual Tour',
      aboutTab: 'About SIGHT',
      locTab: 'Our Locations',
      credits: '© SIGHT Real Estate Development — Strong presence across Egypt; offices and commercial specialists.',
      requestCallback: 'Request a Call Back',
      formTitle: 'Leave your info & we will contact you',
      name: 'Name',
      namePh: 'Your name',
      phone: 'Phone',
      phonePh: '0100 000 0000',
      email: 'Email',
      emailPh: 'your@email.com',
      sendWhats: 'Send via WhatsApp',
      connectTitle: 'Connect With Us',
      cookieText: 'This website uses cookies to ensure you get the best experience on our website.',
      cookieBtn: 'Got it!',
      ourServices: 'Our Services',
      service1Title: 'Property Valuation',
      service1Desc: 'Accurate and up-to-date property valuations to help you make informed decisions.',
      service2Title: 'Investment Consulting',
      service2Desc: 'Expert advice on real estate investment opportunities to maximize your returns.',
      service3Title: 'Legal Assistance',
      service3Desc: 'Comprehensive legal support for all your real estate transactions, ensuring a smooth process.',
    },
    ar: {
      navProps: 'المشاريع',
      navStore: 'خدماتنا',
      navContact: 'تواصل معنا',
      navAbout: 'عن الشركة',
      heroTitle: 'سايت للتطوير <strong>العقاري</strong>',
      heroTag: 'حلول مستدامة ومواقع استراتيجية للمساحات المكتبية والتجارية.',
      ctaView: 'شاهد المشاريع',
      ctaWhatsapp: 'واتساب',
      galleryTitle: 'معرض المشاريع',
      viewDetails: 'عرض التفاصيل',
      highlights: 'أبرز المميزات',
      gallery: 'معرض الصور',
      paymentPlan: 'خطة السداد',
      prices: 'الأسعار',
      unit: 'الوحدة',
      area: 'المساحة',
      price: 'السعر',
      bookNow: 'احجز الآن',
      backToHome: 'العودة للرئيسية',
      virtualTour: 'جولة افتراضية 360°',
      aboutTab: 'عن سايت',
      locTab: 'مواقعنا',
      credits: '© سايت للتطوير العقاري — حضور قوي في جميع أنحاء مصر، متخصصون في المكاتب والمحلات التجارية.',
      requestCallback: 'اطلب إعاده الاتصال',
      formTitle: 'اترك معلوماتك وسنتصل بك',
      name: 'الاسم',
      namePh: 'اسمك',
      phone: 'رقم الهاتف',
      phonePh: '01000000000',
      email: 'البريد الإلكتروني',
      emailPh: 'your@email.com',
      sendWhats: 'أرسل عبر واتساب',
      connectTitle: 'تواصل معنا',
      cookieText: 'يستخدم هذا الموقع ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة.',
      cookieBtn: 'حسناً!',
      ourServices: 'خدماتنا',
      service1Title: 'تقييم العقارات',
      service1Desc: 'تقييمات دقيقة ومحدثة للعقارات لمساعدتك في اتخاذ قرارات مستنيرة.',
      service2Title: 'استشارات استثمارية',
      service2Desc: 'نصائح الخبراء حول فرص الاستثمار العقاري لتعظيم عوائدك.',
      service3Title: 'مساعدة قانونية',
      service3Desc: 'دعم قانوني شامل لجميع معاملاتك العقارية، مما يضمن عملية سلسة.',
    }
  };
  
const WHATSAPP_PHONE_NUMBER = "201099993903";

interface ContactDetails {
  name?: string;
  phone?: string;
  email?: string;
  projectTitle?: string;
}

export const generateWhatsappUrl = (details: ContactDetails): string => {
  let message = `Hello SIGHT Real Estate,\n`;

  if (details.name) {
    message += `\nMy name is ${details.name}.`;
  }
  if (details.phone) {
    message += `\nMy phone number is ${details.phone}.`;
  }
  if (details.email) {
    message += `\nMy email is ${details.email}.`;
  }

  if (details.projectTitle) {
    message += `\n\nI am interested in the "${details.projectTitle}" project.`;
  } else {
    message += `\n\nI would like to inquire about your properties.`;
  }

  message += `\n\nPlease contact me. Thank you.`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message.trim())}`;
};
