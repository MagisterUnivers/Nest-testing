'use client'

import Image from "next/image";
import React from "react";

interface Props {
  userProps: UserObject | null
}

export function ProfilePreview({ userProps }: Props): React.ReactNode {
  function formatDate(timestamp: string | number): string {
    const date = new Date(timestamp as number * 1000)
    return date.toLocaleString()
  }

  return (
    <div className="bg-black rounded-md p-[30px] flex flex-col justify-center items-center">
      <h1 className="text-4xl text-red-600 mb-[40px]">Welcome, {userProps?.telegram_username ?? userProps?.first_name}!</h1>
      {userProps?.profile_picture !== null && userProps?.profile_picture !== undefined} {
        <Image
          priority
          src={String(userProps?.profile_picture)}
          alt="user avatar"
          width={200}
          height={200}
          className="w-[200px] h-[200px] rounded-[12px] object-cover"
        />
      }
      <p className="mt-[20px] p-[10px] rounded-[100px] text-black bg-white">User First Name: {userProps?.first_name}</p>
      <p className="mt-[5px] p-[10px] rounded-[100px] text-black bg-white">Telegram ID: {userProps?.telegram_id}</p>
      <p className="mt-[5px] p-[10px] rounded-[100px] text-black bg-white">Last visited: {userProps?.auth_date ? formatDate(userProps.auth_date) : 'N/A'}</p>
    </div>
  )
}
