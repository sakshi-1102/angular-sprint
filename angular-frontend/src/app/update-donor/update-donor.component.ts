// import { Component, OnInit } from '@angular/core';
// import { DonorService } from '../DonorService';
// import { Donor } from '../donor';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-update-employee',
//   templateUrl: './update-donor.component.html',
//   styleUrls: ['./update-donor.component.css']
// })
// export class UpdatedonorComponent implements OnInit {


//   bloodGroups: string[] = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
//   selectedBloodGroup!: string;
 
  
//   id!: number;
//   donor: Donor = new Donor();
//   constructor(private DonorService: DonorService,
//     private route: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.DonorService.getDonorById(this.id).subscribe((data: Donor) => {
//       this.donor = data;
//     }, (error: any) => console.log(error));
//   }

//   updateDonor() {
//     this.DonorService.updateDonor(this.id, this.donor).subscribe(
//       (response: any) => {
//         console.log(response); 
//         if (response) {
//           this.donor = response;  
//           this.goToDonorList();
//         }
//       },
//       (error: any) => console.log(error)
//     );
//   }

//   onSubmit(){
//     this.DonorService.updateDonor(this.id, this.donor).subscribe( (data: any) =>{
//       this.goToDonorList();
//     }
//     , (error: any) => console.log(error));
//   }

//   goToDonorList(){
//     this.router.navigate(['/donor']);
//   }

  
  

//   selectBloodGroup(bloodGroup: string) {
//     this.selectedBloodGroup = bloodGroup;
//     this.getBloodDonors();
//   }
//   getBloodDonors() {
//     throw new Error('Method not implemented.');
//   }
// }


import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import { Donor } from '../donor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {

  id!: number;
  donor: Donor = new Donor();
  donorService: any;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.donorService.getDonorById(this.id).subscribe((data: (id: number, donor: any) => void) => {
      
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.donorService.updateDonor(this.id, this.donor).subscribe( () =>{
      this.goToDonorList();
    }
    , (error: any) => console.log(error));
  }
  

  goToDonorList(){
    this.router.navigate(['/donor']);
  }
}
