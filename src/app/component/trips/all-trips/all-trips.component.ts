import {Component, OnInit} from '@angular/core';
import {Trip} from 'src/app/model/trip';
import {TripsService} from 'src/app/service/trips.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.getTrips();
  }

  // utilisation d'un Observable à la place du service initial
  getTrips(): void {

    this.tripsService.getTrips().subscribe(trips => this.trips = trips);
  }

}
