import { Dispatch, SetStateAction } from "react"

export async function createUserAction(
  queryParams: QueryParams,
  setStateFunc: Dispatch<SetStateAction<UserObject | null>>,
  setLoadingState: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const response = await fetch('http://localhost:8080/users', {
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
    console.log(result, 'result')
    setStateFunc(result as UserObject)
  } catch (error) {
    console.error('Error sending data to backend:', error)
  } finally {
    setLoadingState(false)
  }
}

export async function updateUserAction(
  queryParams: QueryParams,
  setStateFunc: Dispatch<SetStateAction<UserObject | null>>,
  setLoadingState: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const response = await fetch('http://localhost:8080/users', {
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
    console.log(result, 'result')
    setStateFunc(result as UserObject)
  } catch (error) {
    console.error('Error sending data to backend:', error)
  } finally {
    setLoadingState(false)
  }
}
