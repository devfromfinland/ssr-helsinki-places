# Helsinki Places

This is a web app to show places in Helsinki. Data requested from [MyHelsinki Open APi](http://open-api.myhelsinki.fi/doc)

## Implementation front-end (simple version)

- [x] Using React framework
- [x] Display places in a list as well as on Google Maps using [Google Maps API](https://developers.google.com/maps)
- [x] On map: Nearby places are grouped in to cluster when zoom out. Zoom in to view separately.
- [x] On map: Hover to a location pin will highlight the location on the list
- [x] On map: Click on a location pin will show location name on map (can be used to show more, similar to AirBnB website)
- [x] Default pagination is 10, use can choose how many items to show on 1 page (from 1 - 50)
- [x] User can navigate to different page via input, button, or edit directly on URL
- [x] SEO friendly since this app use Server Side Rendering
- [x] Show notification and and handling error
- [x] Speed optimize since visited page will be cached in the backend (**required redis server to run**)

## Implementation back-end

- [x] NodeJS & ExpressJS server
- [x] Server side filtering data and rendering the whole response in HTML
- [x] Server side caching with Redis
- [x] Unit test with Jest
- [x] End-to-end test with Cypress
- [x] CI with GitHub Actions
- [x] CD with Heroku using GitHub Integration (deploy to production only after all tests passed on GitHub Actions)
- [x] Use mock API instead of real API in test

## To run in local

```
git clone
```

Clone the project to your computer

```
npm install
```

Install dependencies

```
npm run start
```

Build and start the server on http://localhost:3001 (assuming you have redis server running at http://localhost:6379). For Windows user, [memurai](https://www.memurai.com/) can be used as a replacement for [redis server](https://redis.io/topics/quickstart).

```
npm run test
```

Run unit tests with jest and end-to-end test using cypress

###
