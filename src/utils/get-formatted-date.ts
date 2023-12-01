import { format, isToday, isYesterday } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getFormattedDate(date: Date) {
  if (isToday(date)) {
    return 'Hoje'
  }
  if (isYesterday(date)) {
    return 'Ontem'
  } else {
    return format(date, "dd'/'MM'/'yyyy", { locale: ptBR })
  }
}
