export function getCurrentDate(monthsToOffset = 0): Date {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsToOffset);
  return date;
}
