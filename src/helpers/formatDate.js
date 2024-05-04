import { formatDistanceToNow } from "date-fns"

export const formatDateToNow = (postedAt) => {
    return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
}