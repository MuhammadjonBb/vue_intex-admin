export default function beautifyDate(dateValue: string): string[] {
  const parsedDate = new Date(dateValue)
  const formattedDate = []
  formattedDate.push(`${parsedDate.getUTCDate().toString().padStart(2, '0')}.${(parsedDate.getUTCMonth() + 1).toString().padStart(2, '0')}.${parsedDate.getUTCFullYear()}`)
  formattedDate.push(`${parsedDate.getUTCHours().toString().padStart(2, '0')}:${parsedDate.getUTCMinutes().toString().padStart(2, '0')}`)
  return formattedDate
}
