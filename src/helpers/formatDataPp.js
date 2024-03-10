import { format } from "date-fns";

export const getFormattedDatePp = (date) => format(new Date(date), "Pp")