// import { Component, OnInit } from '@angular/core';
// import { Donor } from '../donor';
// import { ActivatedRoute } from '@angular/router';
// import { DonorService } from '../DonorService';

// @Component({
//   selector: 'app-donor-details',
//   templateUrl: './donor-details.component.html',
//   styleUrls: ['./donor-details.component.css']
// })
// export class DonorDetailsComponent implements OnInit {

//   id!: number
//   donor!: Donor 
//   constructor(private route: ActivatedRoute, private donorService: DonorService) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.donor = new Donor();
//     this.donorService.getDonorById(this.id).subscribe( (data: Donor) => {
//       this.donor = data;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { ActivatedRoute } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {

  id!: number
  donor!: Donor
  constructor(private route: ActivatedRoute, private donorService: DonorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.donor = new Donor();
    this.donorService.getDonorById(this.id).subscribe( data => {
      this.donor = data;
    });
  }

}
