const EXPERIENCE_START_DATE = new Date(2022, 4, 1);

export function getExperienceYears() {
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - EXPERIENCE_START_DATE.getFullYear()) * 12 +
    (currentDate.getMonth() - EXPERIENCE_START_DATE.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const roundedYears = months >= 5 ? years + 0.5 : years;

  return { years, roundedYears };
}
