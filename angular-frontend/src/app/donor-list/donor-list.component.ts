// // import { Component, OnInit } from '@angular/core';
// // import { Donor } from '../donor';
// // import { DonorService } from '../DonorService';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-donor-list',
// //   templateUrl: './donor-list.component.html',
// //   styleUrls: ['./donor-list.component.css']
// // })
// // export class DonorListComponent implements OnInit {

// //   donor!: Donor[];

// //   constructor(private donorService: DonorService,
// //     private router: Router){}
  
// //   ngOnInit(): void {
   
// //   this.getDonors();
// //   }
  
// //   private getDonors(){
// //     this.donorService.getDonorsList().subscribe((data: Donor[]) => {
// //       this.donor = data;
// //     });
// //   }

// //   donorDetails(id: number){
// //     this.router.navigate(['donor-details', id]);

// //   }


// // updateDonor(id: number){
// //   this.router.navigate(['update-donor', id]);
// // }
// // deleteDonor(id: number) {
// //   this.donorService.deleteTicket(id).subscribe((data: any) => {
// //     console.log(data);
// //     this.getDonors();
// //   });
// // }

// // }

// import { Component, OnInit } from '@angular/core';
// import { Donor } from '../donor'
// import { DonorService } from '../donor.service'
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-donor-list',
//   templateUrl: './donor-list.component.html',
//   styleUrls: ['./donor-list.component.css']
// })
// export class DonorListComponent implements OnInit {

//   donor!: Donor[];

//   constructor(private donorService: DonorService,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.getDonor();
//   }

//   private getDonor(){
//     this.donorService.getDonorList().subscribe(data => {
//       this.donor = data;
//     });
//   }

//   DonorDetails(id: number){
//     this.router.navigate(['employee-details', id]);
//   }

//   updateDonor(id: number){
//     this.router.navigate(['update-employee', id]);
//   }

//   deleteDonor(id: number){
//     this.donorService.deleteDonor(id).subscribe( data => {
//       console.log(data);
//       this.getDonor();
//     })
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donor: Donor[] = [];

  constructor(private donorService: DonorService, private router: Router) { }

  ngOnInit(): void {
    this.getDonor();
  }

  private getDonor() {
    this.donorService.getDonorList().subscribe(data => {
      this.donor = data;
    });
  }

  donorDetails(id: number) {
    this.router.navigate(['donor-details', id]);
  }

  updateDonor(id: number) {
    this.router.navigate(['update-donor', id]);
  }

  deleteDonor(id: number) {
    this.donorService.deleteDonor(id).subscribe(data => {
      console.log(data);
      this.getDonor();
    });
  }
}
