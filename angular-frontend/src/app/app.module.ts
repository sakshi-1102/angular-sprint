// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { DonorListComponent } from './donor-list/donor-list.component';
// import { CreateDonorComponent } from './create-donor/create-donor.component';
// import { FormsModule } from '@angular/forms';
// import { UpdatedonorComponent } from './update-donor/update-donor.component';
// import { DonorDetailsComponent } from './donor-details/donor-details.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     DonorListComponent,
//     CreateDonorComponent,
//     UpdatedonorComponent,
//     DonorDetailsComponent

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatDonorComponent } from './create-donor/create-donor.component';
import { FormsModule} from '@angular/forms';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component'
import { DonorListComponent } from './donor-list/donor-list.component';
import { DonorService } from './donor.service';

@NgModule({
  declarations: [
    AppComponent,
    DonorListComponent,
    CreatDonorComponent,
    UpdateDonorComponent,
    DonorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [DonorService],
  bootstrap: [AppComponent]
})
export class AppModule { }