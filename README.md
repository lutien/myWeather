# MyWeather
MyWeather - simple weather service.

Page with example - https://lutien.github.io/myWeather/example/.

To receive weather of current location you need to allow browser get your geolocation.

To receive data from api you need to allow browser get unsafe scripts, because github uses https for its domain 
and [openweathermap](https://openweathermap.org/api) uses http on free account.

Used technologies: React, Redux, PostCSS, Babel, Webpack

## Useful commands

To install all dependencies:
``` bash
npm install
```

To run webpack-dev-server
``` bash
npm run watch
```

To build production version
``` bash
npm run build
```