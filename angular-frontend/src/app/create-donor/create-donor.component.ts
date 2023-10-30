// import { Component } from '@angular/core';
// import { Donor } from '../donor';
// import { DonorService } from '../donorService';
// import { Router } from '@angular/router';
// import { NgModel } from '@angular/forms';

// @Component({
//   selector: 'app-create-donor',
//   templateUrl: './create-donor.component.html',
//   styleUrls: ['./create-donor.component.css']
// })
// export class CreateDonorComponent {

//  donor: Donor = new Donor();
//  constructor(private donorService: DonorService,
//   private router: Router){ }
 
//  ngOnInit(): void{

//  }

//  saveDonor(){
//   this.donorService.createDonor(this.donor).subscribe( (data: any) =>{
//     console.log(data);
//     this.goToDonorList();
//   },

  

//     (  error: any) => console.log(error));
//  }

//  goToDonorList(){
// this.router.navigate(['/donor']);
//  }

//  onSubmit(){
//   console.log(this.donor);
//   this.saveDonor();
//  }
// }


import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-donor',
  templateUrl: './create-donor.component.html',
  styleUrls: ['./create-donor.component.css']
})
export class CreatDonorComponent implements OnInit {

  donor: Donor = new Donor();
  constructor(private donorService: DonorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveDonor(){
    this.donorService.createDonor(this.donor).subscribe( data =>{
      console.log(data);
      this.goToDonorList();
    },
    error => console.log(error));
  }

  goToDonorList(){
    this.router.navigate(['/donor']);
  }
  
  onSubmit(){
    console.log(this.donor);
    this.saveDonor();
  }
}