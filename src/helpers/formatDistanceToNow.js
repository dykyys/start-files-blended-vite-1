import { formatDistanceToNow } from "date-fns";

export const getFormattedDateByDistanceToNow = (date) => formatDistanceToNow(new Date(date), { addSuffix: true })