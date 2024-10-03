import Cookies from 'js-cookie'

export function Logout(): void {
  Cookies.remove('telegram_id')
  Cookies.remove('hash')
}
