'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}

interface Context {
  value: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchContext = createContext<Context | null>(null)

export function SearchProvider({ children }: Props): React.ReactNode {
  const [searchQuery, setSearchQuery] = useState<string>('')

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (!window.location.pathname.startsWith('/admin')) {
        setSearchQuery('')
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const initialValue = {
    value: searchQuery,
    handleSearchChange
  }

  return (
    <SearchContext.Provider value={initialValue}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchProvider(): Context | null {
  const context = useContext(SearchContext)
  if (context === null) {
    throw new Error('useSearchProvider must be used within an SearchProvider')
  }
  return context
}
