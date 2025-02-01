import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
