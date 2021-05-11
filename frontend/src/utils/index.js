export const getDate = (date) => {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Dicember',
  ];
  const handleDate = new Date(date);

  return `${handleDate.getDate()} ${
    MONTHS[handleDate.getMonth()]
  } ${handleDate.getFullYear()}`;
};
