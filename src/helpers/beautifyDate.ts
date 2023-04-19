export default function beautifyDate(dateValue: string): string[] {
  const date = new Date(dateValue)
  const formattedDate = []
  formattedDate.push(`${date.getUTCDate().toString().padStart(2, '0')}.${(date.getUTCMonth() + 1).toString().padStart(2, '0')}.${date.getUTCFullYear()}`)
  formattedDate.push(`${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}`)
  return formattedDate
}
