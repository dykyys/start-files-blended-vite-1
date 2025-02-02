import { format } from 'date-fns';

export const TimeFormat = date => {
  const newDate = format(new Date(date), 'Pp');
  return newDate;
};
