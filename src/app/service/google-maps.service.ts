import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private apiKey: string = 'AIzaSyBYVJhKTD63ccMTK1r43ALQomL_q1LLM88';

  constructor(private http: HttpClient) {}

  getDirections(origin: string, destination: string): Observable<any> {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&travelMode=DRIVE&avoid=ferries&polylineQuality=HIGH_QUALITY&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getPlacesNearby(
    lat: number,
    lng: number,
    type: string,
    radius: number = 500
  ): Observable<any> {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  testGetDirections(): Observable<any> {
    return this.getDirections('Toronto', 'Montreal');
  }
}
