'use client'

import { AuthCheck } from "@/utils/auth-check"
import { Logout } from "@/utils/logout"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function Header(): React.ReactNode {
  const router = useRouter()

  function CustomLogout(): void {
    Logout()
    router.push('/login')
  }

  useEffect(() => {
    AuthCheck()
  }, [])

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-black"
        >
          Browse Users
        </Link>
        <Link
          href="/my-profile"
          className="text-muted-foreground transition-colors hover:text-foreground text-black"
        >
          Dashboard
        </Link>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <input
            type="text"
            placeholder="Search products..."
            className="p-[15px] sm:w-[300px] md:w-[200px] lg:w-[300px] text-black"
          />
        </form>
      </div>
      <button type="button" className="text-black" onClick={() => CustomLogout()}>Logout</button>
    </header>
  )
}
