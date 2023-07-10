export function handleTransformDateInDaysOrWeeks(oldDate: string) {
  const targetDate = new Date(oldDate)
  const today = new Date()

  const differenceInMilliseconds = today.getTime() - targetDate.getTime()
  const differenceInDays= Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))
  const differenceInWeeks= Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7))

  let result = "";

  switch (true) {
    case differenceInDays === 0:
      result = "Hoje";
      break;
    case differenceInDays === 1:
      result = "Há 1 dia";
      break;
    case differenceInDays > 1 && differenceInDays < 15:
      result = `Há ${differenceInDays} dias`;
      break;
    case differenceInDays > 14:
      result = `Há ${differenceInWeeks} semanas`;
      break;
    default:
      ''
      break;
  }

  return result;
}