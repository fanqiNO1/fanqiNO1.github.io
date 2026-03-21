import zh from './zh.json';
import en from './en.json';

const translations = {
  zh,
  en,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return 'en';  // 默认英文（包括根路径 /）
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang as keyof typeof translations];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === 'zh') return `/zh${path}`;
  return path;  // 英文使用根路径
}
