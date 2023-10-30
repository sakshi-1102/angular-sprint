// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DonorListComponent } from './donor-list/donor-list.component';
// import { CreateDonorComponent } from './create-donor/create-donor.component';

// const routes: Routes = [
//   {path: 'donor', component:DonorListComponent},
//   {path: 'create-donor', component: CreateDonorComponent},
//   {path: '', redirectTo: 'donor', pathMatch: 'full'},
//   {path: 'update-donor/:id', component:CreateDonorComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorListComponent } from './donor-list/donor-list.component';
import { CreatDonorComponent } from './create-donor/create-donor.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';

const routes: Routes = [
  {path: 'donor', component: DonorListComponent},
  {path: 'create-donor', component: CreatDonorComponent},
  {path: '', redirectTo: 'donor', pathMatch: 'full'},
  {path: 'update-donor/:id', component: UpdateDonorComponent},
  {path: 'employee-details/:id', component: DonorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
