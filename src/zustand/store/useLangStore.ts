import { create } from 'zustand';

type LangState = {
    lang: 'en' | 'bn';
    setLang: (lang: 'en' | 'bn') => void;
};

export const useLangStore = create<LangState>((set) => ({
    lang: 'bn',
    setLang: (lang) => set({ lang }),
}));
