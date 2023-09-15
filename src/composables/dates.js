export const eventDates = [
  {
    date: '2023-01-07',
    time: '21:00',
    remark: 'Winter Edition',
  },
  {
    date: '2023-04-01',
    time: '21:00',
    remark: 'Kombiwochenende',
  },
  {
    date: '2023-07-01',
    time: '21:00',
    remark: 'Summer Edition',
  },
  {
    date: '2023-10-07',
    time: '21:00',
    remark: 'Kombiwochenende',
  },
];

export const isNextFutureDate = (dateStr) => {
  const currentDate = new Date();
  const nextFutureDate = eventDates.find((dd) => new Date(dd.date) > currentDate);
  return (
    nextFutureDate
        && new Date(dateStr).getTime() === new Date(nextFutureDate.date).getTime()
  );
};
