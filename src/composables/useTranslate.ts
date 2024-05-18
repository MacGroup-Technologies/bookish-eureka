import { useAppStore } from '@/stores/app';
import en from '@/locale/en.json';
import es from '@/locale/es.json';

export function useTranslate(word: string) {
  const appStore = useAppStore();
  const locale: any = appStore.lang === 'en' ? en : es;

  return locale[word];
}
