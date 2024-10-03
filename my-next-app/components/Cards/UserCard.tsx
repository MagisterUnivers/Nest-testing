'use client'

import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Props {
  userData: UserObject | null
}

export function UserCard({ userData }: Props): React.ReactNode {
  return (
    <Link href={`/admin/${userData?.telegram_id}`} className="group flex gap-[20px] p-[10px] rounded-md bg-slate-400 hover:bg-red-500 duration-300 items-center justify-center w-fit h-auto">
      <h2 className="text-black text-2xl group-hover:text-white duration-300">{userData?.first_name ?? userData?.telegram_username}</h2>
      {userData?.profile_picture !== null && userData?.profile_picture !== undefined} {
        <Image
          priority
          src={String(userData?.profile_picture)}
          alt="user avatar"
          width={30}
          height={30}
          className="w-[30px] h-[30px] rounded-[12px] object-cover"
        />
      }
    </Link>
  )
}
