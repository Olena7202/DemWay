import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Locale } from './copy'

const storageKey = 'demway-lang'

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: Copy
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readLocale(): Locale {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'en' || stored === 'uk' || stored === 'pl') return stored
  } catch {
    /* ignore */
  }
  return 'uk'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('uk')

  useEffect(() => {
    setLocaleState(readLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy[locale].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', copy[locale].meta.description)
    try {
      localStorage.setItem(storageKey, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: copy[locale],
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider')
  return ctx
}
