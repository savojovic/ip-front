// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const homePage = "http://localhost:4200";
export const baseUrl = "http://localhost:8080";
export const museumEndPoint = `/museums`;
export const tourEndPoint = `/tour`;
export const loginEndPoint = `/login`;
export const openWeatherApiKey = `appid=63af5b14517966d094353d593b864a5f`;
export const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather`;
export const weatherUnits = `units=metric`;
export const openWeatherImgUrl = `http://openweathermap.org/img/wn/`;
export const citiesForACountryUrl = `https://countriesnow.space/api/v0.1/countries/cities`;
export const restCountriesAlpha2CodeUrl = `https://restcountries.com/v3.1/name/`;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
