'use client'

import { getCurrentUser } from "@/app/actions"
import { Header } from "@/components/Header/Header"
import { ProfilePreview } from "@/components/ProfilePreview/ProfilePreview"
import { useEffect, useState } from "react"

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [userData, setUserData] = useState<UserObject | null>(null)

  useEffect(() => {
    getCurrentUser(setUserData, setIsLoading).then(() => { }).catch((err) => console.error(err))
  }, [])

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full h-screen">
        {!isLoading && (
          <ProfilePreview userProps={userData} />
        )}
      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </>
  )
}
