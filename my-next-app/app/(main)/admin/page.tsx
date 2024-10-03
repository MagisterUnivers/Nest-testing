'use client'

import { createUserAction, updateUserAction } from "@/app/actions";
import Cookies from 'js-cookie'
import { ProfilePreview } from "@/components/ProfilePreview/ProfilePreview";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";

export default function Page() {
  const searchParams = useSearchParams()
  const [userData, setUserData] = useState<UserObject | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const id = searchParams.get('id')

  function saveUserDataToCookies(id: string, hash: string): void {
    Cookies.set('telegram_id', id, { secure: true, expires: 1 })
    Cookies.set('hash', hash, { secure: true, expires: 1 })
  }

  async function checkUserExists(userId: string): Promise<boolean> {
    try {
      const response = await fetch(`http://localhost:8080/users/find/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const res = await response.json()
      return res as boolean
    } catch (error) {
      console.error('Error checking user existence:', error)
      return false
    }
  }

  useEffect(() => {
    if (id !== null) {
      const first_name = searchParams.get('first_name')
      const username = searchParams.get('username')
      const photo_url = searchParams.get('photo_url')
      const auth_date = searchParams.get('auth_date')
      const hash = searchParams.get('hash')

      if (id && first_name && auth_date && hash) {
        const queryParams = {
          id,
          first_name,
          last_name: 'unknown',
          telegram_id: id,
          telegram_username: username,
          profile_picture: photo_url,
          auth_date,
          hash
        }
        saveUserDataToCookies(id, hash)
        checkUserExists(id).then((exists) => {
          if (exists) {
            updateUserAction(queryParams, setUserData, setIsLoading)
          } else {
            createUserAction(queryParams, setUserData, setIsLoading)
          }
        })
      } else {
        setIsLoading(false)
      }
    }
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full h-screen">
        {id !== null && (
          <ProfilePreview userProps={userData} />
        )}
      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </>
  )
}
