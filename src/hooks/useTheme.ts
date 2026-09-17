import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const PAGE_COLOR: Record<Theme, string> = {
  dark: '#070d0b',
  light: '#f6f9f8',
}

/** Whatever the pre-paint script in index.html already resolved, so we never fight it. */
function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', PAGE_COLOR[theme])
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* private mode — the theme still applies for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
