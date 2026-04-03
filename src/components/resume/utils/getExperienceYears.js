export function getExperienceYears(startDate) {
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const roundedYears = months >= 5 ? years + 0.5 : years;

  return { years, roundedYears };
}
