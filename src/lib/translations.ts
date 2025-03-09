// Language codes follow ISO 639-1 standard
export type Language = 'en' | 'vi' | 'sv' | 'ja' | 'zh' | 'de';

export interface TranslationContent {
  siteName: string;
  siteDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  exploreServices: string;
  readBlog: string;
  aboutOffice: string;
  contactUs: string;
  settings: string;
  home: string;
  blog: string;
  about: string;
  contact: string;
}

export const translations: Record<Language, TranslationContent> = {
  // English
  en: {
    siteName: 'The Office of Nils Johansson',
    siteDescription: 'A digital workspace bridging marine engineering and Southeast Asian culture',
    heroTitle: 'The Office of Nils Johansson',
    heroSubtitle: 'Bridging marine engineering expertise with Southeast Asian cultural insights for innovative solutions.',
    exploreServices: 'Explore Our Services',
    readBlog: 'Read the Blog',
    aboutOffice: 'About The Office',
    contactUs: 'Contact Us',
    settings: 'Settings',
    home: 'Home',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact'
  },
  
  // Vietnamese - with special quirk changing the name
  vi: {
    siteName: 'Văn Phòng của Thuan Trinh',
    siteDescription: 'Không gian làm việc kỹ thuật số kết nối kỹ thuật hàng hải và văn hóa Đông Nam Á',
    heroTitle: 'Văn Phòng của Thuan Trinh',
    heroSubtitle: 'Kết nối chuyên môn kỹ thuật hàng hải với hiểu biết văn hóa Đông Nam Á để tạo ra giải pháp sáng tạo.',
    exploreServices: 'Khám Phá Dịch Vụ',
    readBlog: 'Đọc Blog',
    aboutOffice: 'Về Văn Phòng',
    contactUs: 'Liên Hệ',
    settings: 'Cài Đặt',
    home: 'Trang Chủ',
    blog: 'Blog',
    about: 'Giới Thiệu',
    contact: 'Liên Hệ'
  },
  
  // Swedish
  sv: {
    siteName: 'Nils Johanssons Kontor',
    siteDescription: 'En digital arbetsplats som överbryggar marinteknologi och sydostasiatisk kultur',
    heroTitle: 'Nils Johanssons Kontor',
    heroSubtitle: 'Överbryggar expertis inom marinteknologi med sydostasiatiska kulturella insikter för innovativa lösningar.',
    exploreServices: 'Utforska Våra Tjänster',
    readBlog: 'Läs Bloggen',
    aboutOffice: 'Om Kontoret',
    contactUs: 'Kontakta Oss',
    settings: 'Inställningar',
    home: 'Hem',
    blog: 'Blogg',
    about: 'Om',
    contact: 'Kontakt'
  },
  
  // Japanese
  ja: {
    siteName: 'ニルス・ヨハンソンのオフィス',
    siteDescription: '海洋工学と東南アジアの文化を結ぶデジタルワークスペース',
    heroTitle: 'ニルス・ヨハンソンのオフィス',
    heroSubtitle: '海洋工学の専門知識と東南アジアの文化的洞察を結びつけ、革新的なソリューションを提供します。',
    exploreServices: 'サービスを探る',
    readBlog: 'ブログを読む',
    aboutOffice: 'オフィスについて',
    contactUs: 'お問い合わせ',
    settings: '設定',
    home: 'ホーム',
    blog: 'ブログ',
    about: '概要',
    contact: '連絡先'
  },
  
  // Chinese (Simplified)
  zh: {
    siteName: '尼尔斯·约翰逊办公室',
    siteDescription: '连接海洋工程和东南亚文化的数字工作空间',
    heroTitle: '尼尔斯·约翰逊办公室',
    heroSubtitle: '将海洋工程专业知识与东南亚文化见解相结合，提供创新解决方案。',
    exploreServices: '探索我们的服务',
    readBlog: '阅读博客',
    aboutOffice: '关于办公室',
    contactUs: '联系我们',
    settings: '设置',
    home: '首页',
    blog: '博客',
    about: '关于',
    contact: '联系'
  },
  
  // German
  de: {
    siteName: 'Das Büro von Nils Johansson',
    siteDescription: 'Ein digitaler Arbeitsplatz, der Marinetechnik und südostasiatische Kultur verbindet',
    heroTitle: 'Das Büro von Nils Johansson',
    heroSubtitle: 'Verbindung von Fachwissen in der Marinetechnik mit südostasiatischen kulturellen Einblicken für innovative Lösungen.',
    exploreServices: 'Entdecken Sie Unsere Dienstleistungen',
    readBlog: 'Blog Lesen',
    aboutOffice: 'Über Das Büro',
    contactUs: 'Kontaktieren Sie Uns',
    settings: 'Einstellungen',
    home: 'Startseite',
    blog: 'Blog',
    about: 'Über Uns',
    contact: 'Kontakt'
  }
}; 