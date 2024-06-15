/// <reference types="googlemaps" />

import { Component } from '@angular/core';
import { GoogleMapsService } from '../../service/google-maps.service';
import { decodePolyline } from '../../utils/polyline';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss',
})
export class MapsComponent {
  title = 'Maps';
  origin = 'CN Tower, Toronto, ON, Canada';
  destination = 'UBC, Vancouver, BC, Canada';
  places: any[] = [];
  map: google.maps.Map | undefined;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.loadDirectionsAndPlaces();
  }

  initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 43.65, lng: -79.38 },
      zoom: 10,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
  }

  loadDirectionsAndPlaces(): void {
    this.googleMapsService
      .getDirections(this.origin, this.destination)
      .subscribe((response: any) => {
        const polyline = response.routes[0].overview_polyline.points;
        const routePoints = decodePolyline(polyline);

        const path = routePoints.map(([lat, lng]) => ({ lat, lng }));
        const routePath = new google.maps.Polyline({
          path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        if (this.map) routePath.setMap(this.map);

        routePoints.forEach(([lat, lng]) => {
          this.googleMapsService
            .getPlacesNearby(lat, lng, 'gas_station')
            .subscribe((placesResponse: any) => {
              this.places.push(...placesResponse.results);
              placesResponse.results.forEach((place: any) => {
                new google.maps.Marker({
                  position: {
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng,
                  },
                  map: this.map,
                  title: place.name,
                });
              });
            });
        });
      });
  }
}
