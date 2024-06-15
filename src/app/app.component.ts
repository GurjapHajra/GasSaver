import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from './service/google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'GasSaver';

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {
    this.googleMapsService.testGetDirections().subscribe((data) => {
      console.log(':::', data);
    });
  }
}
