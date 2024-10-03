'use client'

import React from "react";

interface Props {
  userProps: UserObject | null
}

export function ProfilePreview({ userProps }: Props): React.ReactNode {
  return (
    <div>
      <h1>You are in admin!</h1>
      <p>{userProps?.first_name}</p>
    </div>
  )
}
