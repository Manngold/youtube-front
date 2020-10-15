export const dateFixer = (date) => {
  const origin = new Date(date);
  const year = origin.getFullYear();
  const month = origin.getMonth() + 1;
  const day = origin.getDate();
  return `${year}.${month}.${day}`;
};
