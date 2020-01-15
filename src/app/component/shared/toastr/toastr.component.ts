import { Component, OnInit } from '@angular/core';
import { Toastr } from 'src/app/model/toastr';
import { Observable } from 'rxjs';
import { ToastrService } from 'src/app/service/toastr.service';

@Component({
	selector: 'app-toastr',
	templateUrl: './toastr.component.html',
	styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

	public toastr$: Observable<Toastr | null>;

	constructor(private toastrService: ToastrService) { }

	ngOnInit() {
		this.toastr$ = this.toastrService.toastr$;
	}


	closeToastr() {
		this.toastrService.closeToastr();
	}

}
