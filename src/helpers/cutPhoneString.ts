export default function cutPhoneString(str: string) {
  if (str.startsWith('+7')) {
    return str.substring(5)
  } else if (str.startsWith('+998')) {
    return str.substring(4)
  }
  return str
}
