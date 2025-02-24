# Leaflet-Countries

## Introduction

![leaflet](/public/leaflet.png)

This project is a [Vite](https://vite.dev/) application.

This app displays a [Leaflet](https://leafletjs.com/) map with countries informations thanks to the API from [countryapi](https://countryapi.io/).

The map can show countries in clusters with markers. When we click on a marker, we can read informations from the country.

## Ressources:

https://leafletjs.com/

https://unpkg.com/browse/leaflet@1.9.4/dist/

https://countryapi.io

## Steps to show the countries

At the begining, we have no data on the map.

![map](/public/leaflet-1.png)

We have to click on the expand button .
![map](/public/leaflet-2.png)

If submit without an API key or a bad one into the input element, an error displays.
![map](/public/leaflet-3.png)

If submit with a good API key into the input element, we get the countries.
![map](/public/leaflet-4.png)

Then, we can select a country to show its informations.
![map](/public/leaflet-5.png)
