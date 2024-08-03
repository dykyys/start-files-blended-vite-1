import { formatDistanceToNow } from 'date-fns';

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
