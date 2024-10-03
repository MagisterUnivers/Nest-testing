'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  async function sendDataToBackend(queryParams: QueryParams): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryParams),
      })

      if (!response.ok) {
        throw new Error('Failed to send data')
      }

      const result = await response.json()
      console.log('User created:', result)
    } catch (error) {
      console.error('Error sending data to backend:', error)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const id = searchParams.get('id')
    const first_name = searchParams.get('first_name')
    const username = searchParams.get('username')
    const photo_url = searchParams.get('photo_url')
    const auth_date = searchParams.get('auth_date')
    const hash = searchParams.get('hash')
    // const { id, first_name, username, photo_url, auth_date, hash } = router.query

    if (id && first_name && auth_date && hash) {
      const queryParams = {
        id,
        first_name,
        last_name: null,
        telegram_id: id,
        telegram_username: username,
        profile_picture: photo_url,
        auth_date,
        hash
      }
      sendDataToBackend(queryParams)
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>You are in admin!</h1>
        </div>
      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </>
  )
}
