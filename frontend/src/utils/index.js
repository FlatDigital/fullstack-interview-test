export const getDate = (date) => {
  const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const handleDate = new Date(date);
  return `${handleDate.getDay()} ${
    MONTHS[handleDate.getMonth() - 1]
  } ${handleDate.getFullYear()}`;
};
