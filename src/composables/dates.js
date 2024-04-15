export const eventDates = [
    {
        date: '2024-01-06',
        time: '21:00',
        remark: '',
    },
    {
        date: '2024-04-13',
        time: '21:00',
        remark: '',
    },
    {
        date: '2024-07-06',
        time: '21:00',
        remark: '',
    },
    {
        date: '2024-10-12',
        time: '21:00',
        remark: '',
    },
]

export const isNextFutureDate = (dateStr) => {
    const currentDate = new Date()
    const nextFutureDate = eventDates.find(
        (dd) => new Date(dd.date) > currentDate
    )
    return (
        nextFutureDate &&
        new Date(dateStr).getTime() === new Date(nextFutureDate.date).getTime()
    )
}

export const getNextFutureDate = () => {
    const currentDate = new Date()
    const nextFutureDate = eventDates.find(
        (dd) => new Date(dd.date) > currentDate
    )
    return nextFutureDate
}

export const generateICS = (e) => {
    const date = new Date(`${e.date}T${e.time}`)

    const event = {
        start: [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
        ],
        duration: { hours: 9, minutes: 0 },
        title: "Gear'n'Dance",
        description: e.remark,
        location: 'Eloria Bar und Lounge Knappenstr. 36 46238 Bottrop',
        geo: { lat: 51.5183672, lon: 6.9568295 },
    }

    // Convert to two-digit format
    const twoDigit = (num) => (num < 10 ? `0${num}` : `${num}`)
    const formatDate = `${date.getFullYear()}${twoDigit(
        date.getMonth() + 1
    )}${twoDigit(date.getDate())}T${twoDigit(date.getHours())}${twoDigit(
        date.getMinutes()
    )}00`

    const duration = {
        hours: 9,
        minutes: 0,
    }
    const durationString = `PT${duration.hours}H${duration.minutes}M`
    const timezone = 'Europe/Berlin'
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//YourOrganization//YourApp//EN
BEGIN:VEVENT
UID:${Date.now()}@yourapp.com
DTSTAMP:${formatDate}
DTSTART;TZID=${timezone}:${formatDate}
DURATION:${durationString}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
GEO:${event.geo.lat};${event.geo.lon}
END:VEVENT
END:VCALENDAR`

    //   console.log(`event: ${JSON.stringify(event)}`);

    //   createEvent(event, (error, value) => {
    //     if (error) {
    //       console.log(error);
    //     }
    //     ret = value;
    //   });
    //   return ret;
}
