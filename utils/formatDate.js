import { format, parseISO } from 'date-fns';

export const FormatDate = (dateToBeFormatted) => {
  const postDate = parseISO(dateToBeFormatted);
  const formattedDate = format(dateToBeFormatted === undefined ? new Date() : postDate, 'dd-MM-yyyy');
  return formattedDate;
};
