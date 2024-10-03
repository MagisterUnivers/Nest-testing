import Cookies from "js-cookie"
import { redirect } from "next/navigation"

export function AuthCheck(): void {
  const telegramId = Cookies.get('telegram_id')
  const hash = Cookies.get('hash')

  if (!telegramId || !hash) {
    redirect('/login')
  }
}
