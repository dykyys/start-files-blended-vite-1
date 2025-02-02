import { formatDistanceToNow } from 'date-fns';

export const TimeAgo = date => {
  const newDate = new Date(date);
  const formatedDate = formatDistanceToNow(newDate, { addSuffix: true });
  return formatedDate;
};
