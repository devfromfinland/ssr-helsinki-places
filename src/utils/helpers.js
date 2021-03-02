const isValidTimeString = (strTime) => {
  // required format HH:MM:SS
  const reg = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g
  if (strTime.match(reg)) return true
  return false
}

const stringTimeToSeconds = (strTime) => {
  // strTime format HH:MM:SS
  const hour = parseInt(strTime.slice(0, 2), 10)
  const minute = parseInt(strTime.slice(3, 5), 10)
  const second = parseInt(strTime.slice(7, 9), 10)
  return (hour * 60 * 60 + minute * 60 + second)
}

const checkOpeningStatus = (openingHours) => {
  if (!openingHours || !openingHours.hours) return 'No data'

  const currentDay = new Date(Date.now())
  const day = currentDay.getDay() === 0 ? 7 : currentDay.getDay() // Monday - Sunday: 1 - 7
  const currentHour = currentDay.getHours()
  const currentMinute = currentDay.getMinutes()
  const currentTime = (currentHour * 60 * 60 + currentMinute * 60 + currentDay.getSeconds())
  const { hours } = openingHours
  const openingException = openingHours.openinghours_exception

  if (hours[day - 1].open24h) {
    return (!openingException || openingException === '')
      ? 'Open'
      : 'Open with exception'
  } if (!hours[day - 1].opens || !hours[day - 1].closes) {
    return 'Closed'
  } if (!isValidTimeString(hours[day - 1].opens) || !isValidTimeString(hours[day - 1].closes)) {
    return 'Invalid data'
  } if (currentTime >= stringTimeToSeconds(hours[day - 1].opens)
    && currentTime <= stringTimeToSeconds(hours[day - 1].closes)) {
    return (!openingException || openingException === '')
      ? 'Open'
      : 'Open with exception'
  }

  return 'Closed'
}

const extractLocations = (places) => {
  const locations = places.map((place) => ({
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
  checkOpeningStatus,
  extractLocations,
}
