'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

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
