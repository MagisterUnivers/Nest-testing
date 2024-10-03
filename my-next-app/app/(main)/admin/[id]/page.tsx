'use client'

import { getUserById } from "@/app/actions"
import { Header } from "@/components/Header/Header"
import { ProfilePreview } from "@/components/ProfilePreview/ProfilePreview"
import { AuthCheck } from "@/utils/auth-check"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: number } }) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [userData, setUserdata] = useState<UserObject | null>(null)

  useEffect(() => {
    getUserById(params.id, setUserdata, setIsLoading).then(() => { }).catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    AuthCheck()
  }, [])

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center w-full h-screen justify-center backdrop:justify-center">
        {!isLoading && (
          <ProfilePreview userProps={userData} />
        )}
      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </>
  )
}
