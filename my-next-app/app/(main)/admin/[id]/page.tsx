'use client'

import { Header } from "@/components/Header/Header"
import { AuthCheck } from "@/utils/auth-check"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    AuthCheck()
  }, [])

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>You are specific id!</h1>
        </div>
      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </>
  )
}
