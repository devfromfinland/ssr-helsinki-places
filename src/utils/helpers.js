const isValidTimeString = (strTime) => {
  // required format HH:MM:SS
  const reg = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g
  if (strTime.match(reg)) return true
  return false
}

const stringTimeToSeconds = (strTime) => {
  // strTime format HH:MM:SS
  const hour = parseInt(strTime.slice(0, 2))
  const minute = parseInt(strTime.slice(3, 5))
  const second = parseInt(strTime.slice(7, 9))
  return (hour * 60 * 60 + minute * 60 + second)
}

const checkOpeningStatus = (openingHours) => {
  if (!openingHours || !openingHours.hours) return 'No data'

  const currentDay = new Date(Date.now())
  const day = currentDay.getDay() === 0 ? 7 : currentDay.getDay() // Monday - Sunday: 1 - 7
  const currentTimeInSeconds = (currentDay.getHours() * 60 * 60 + currentDay.getMinutes() * 60 + currentDay.getSeconds())
  const { hours, openinghours_exception } = openingHours

  if (hours[day - 1].open24h) {
    return (!openinghours_exception || openinghours_exception === '')
      ? 'Open'
      : 'Open with exception'
  } else if (!hours[day - 1].opens || !hours[day - 1].closes) {
    return 'Closed'
  } else if (!isValidTimeString(hours[day - 1].opens) || !isValidTimeString(hours[day - 1].closes)) {
    return 'Invalid data'
  } else if (currentTimeInSeconds >= stringTimeToSeconds(hours[day - 1].opens) 
    && currentTimeInSeconds <= stringTimeToSeconds(hours[day - 1].closes)) {
    return (!openinghours_exception || openinghours_exception === '')
      ? 'Open'
      : 'Open with exception'
  }

  return 'Closed'
}

const extractLocations = (places) => {
  const locations = places.map(place => ({
    name: place.name,
    location: {
      lat: place.location.lat,
      lng: place.location.lon,
    },
    id: place.id,
  }))

  return locations
}

module.exports = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
  DEFAULT_LANGUAGE: 'en',
  checkOpeningStatus,
  extractLocations,
}