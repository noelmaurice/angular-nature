import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Trip } from 'src/app/model/trip';
import { TripsService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-detail-trip',
  templateUrl: './detail-trip.component.html',
  styleUrls: ['./detail-trip.component.scss']
})
export class DetailTripComponent implements OnInit {

  	trip: Trip = null;

    // route => request pour récupérer paramètres URL
    // router => response pour redirection
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private tripsService: TripsService) {}

	ngOnInit(): void {
		// propriété snapshot => récupération synchrone du paramètre
		const id: number = <any>this.route.snapshot.paramMap.get('id');
		console.log(id);
				
    	// un observable est utilisé à la place du service initial
    	this.tripsService.getTrip(id).subscribe(trip => this.trip = trip);
	}


	delete (trip: Trip) : void {
		this.tripsService.deleteTrip(trip).subscribe(_ => this.goBack());
	}

	goBack(): void {
		// affichage de tous les voyages
		this.router.navigate(['/home']);
	}

	goEdit(trip: Trip): void
	{
		let link = ['trip/edit', trip.id];
		this.router.navigate(link);
	}

}
