// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs';
// // import { Donor } from './donor';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class DonorService {
// //   // getDonorById(donorId: string) {
// //   //   throw new Error('Method not implemented.');
// //   // }
// //   // updateDonor(donor: Donor) {
// //   //   throw new Error('Method not implemented.');
// //   // }
// //   createEmployee(employee: Donor) {
// //     throw new Error('Method not implemented.');
// //   }
// //   private baseURL = "http://localhost:9090/api/s1/donors";

// //   constructor(private httpClient: HttpClient) { }

// //   getdonorsList(): Observable<Donor[]> {
// //     return this.httpClient.get<Donor[]>(this.baseURL);
// //   }
// //   createDonor(donor: Donor): Observable<object>{
// //     return this.httpClient.post(`$(this.baseURL)`, donor);

// //   }
  
// //   getDonorById(id: number): Observable<Donor> {
// //     return this.httpClient.get<Donor>(`${this.baseURL}/${id}`);
// //   }
// //   updateDonor(donor: Donor):Observable<object> {
// //     return this.httpClient.put(`${this.baseURL}`, donor);
// //   }
  
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs';
// import { Donor } from './donor';

// @Injectable({
//   providedIn: 'root'
// })
// export class DonorService {

//   private baseURL = "http://localhost:9090/api/s1/donors";
//   deleteDonor: any;

//   constructor(private httpClient: HttpClient) { }
  
//   getDonorsList(): Observable<Donor[]>{
//     return this.httpClient.get<Donor[]>(`${this.baseURL}`);
//   }

//   createDonor(donor: Donor): Observable<Object>{
//     return this.httpClient.post(`${this.baseURL}`, donor);
//   }

//   getDonorById(id: number): Observable<Donor>{
//     return this.httpClient.get<Donor>(`${this.baseURL}/${id}`);
//   }

//   updateDonor(id: number, employee: Donor): Observable<Object>{
//     return this.httpClient.put(`${this.baseURL}/${id}`, Donor);
//   }

 
// //   DeleteDonor({ id }: { id: number; }): Observable<any> {
// //     const deleteUrl = `${this.baseURL}/${id}`;
// //     return this.httpClient.delete(deleteUrl);
// // }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Donor } from './donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private baseURL = "http://localhost:9090/api/s1/donors";

  constructor(private httpClient: HttpClient) { }
  
  getDonorList(): Observable<Donor[]>{
    return this.httpClient.get<Donor[]>(`${this.baseURL}`);
  }

  createDonor(donor: Donor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Donor);
  }

  getDonorById(id: number): Observable<Donor>{
    return this.httpClient.get<Donor>(`${this.baseURL}/${id}`);
  }

  updateDonor(id: number, donor: Donor): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, donor);
  }

  deleteDonor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}