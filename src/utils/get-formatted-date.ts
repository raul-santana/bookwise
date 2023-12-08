import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getDateWithTodayOrYesterday(date: Date) {
  if (isToday(date)) {
    return 'Hoje'
  }
  if (isYesterday(date)) {
    return 'Ontem'
  } else {
    return format(date, "dd'/'MM'/'yyyy", { locale: ptBR })
  }
}

export function dateRelativeToNow(date: Date) {
  return formatDistanceToNow(date, { locale: ptBR, addSuffix: true })
}
